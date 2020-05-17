// Load 'opencv.js' assigning the value to the global variable 'cv'
const rgbHex = require('rgb-hex');
const cv = require("opencv.js");
const Jimp = require("jimp");
// console.log(cv.getBuildInformation())

// opencv methods
// console.log(Object.keys(cv.modules));
// opencv method search
// console.log(Object.keys(cv).filter(key => key.indexOf("INTER") >= 0));

module.exports = {
    getTestImages: function () {
        return [
            "https://2014.igem.org/wiki/images/a/a7/Sample.png",
            "https://images2.minutemediacdn.com/image/upload/c_crop,h_3236,w_5760,x_0,y_0/f_auto,q_auto,w_1100/v1554700227/shape/mentalfloss/istock-609802128.jpg",
            "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
            "https://qph.fs.quoracdn.net/main-qimg-7e3c3f89920a527c3becb8e312b0a465",
            "https://www.passmark.com/source/img_posts/montest_slide_2.png",
            "https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg",
        ];
    },
    analyseImage: async function (image, id, saveImageLocaly) {
        return new Promise(async (resolve, reject) => {
            ///////-->
            // paramaters and mats

            const RED_COEFFICIENT = 1;
            const GREEN_COEFFICIENT = 0.8;
            const BLUE_COEFFICIENT = 1.2;
            //   const BLUR_SIZE = 3;
            const THRESHHOLD = 127.5;
            const CANNY_THRESHOLD = 100;
            const EDGE_WEIGHT = 0.719;
            const LOCATIONS_WEIGHT = 0.2;
            const EDGE_GAMMA = 0;
            const resultsOptions = {
                0: { channelName: "red_channel", color: [255, 0, 0] },
                1: { channelName: "green_channel", color: [0, 255, 0] },
                2: { channelName: "blue_channel", color: [0, 0, 255] },
                3: { channelName: "alpha_channel", color: [120, 120, 120] },
            };
            let resultObject = {};

            // prettier-ignore
            const locationMatrix = [
              0,0,0, 0,0,0, 0,0,0,
              0,0,0, 255,255,255, 0,0,0,
              0,0,0, 0,0,0, 0,0,0
            ];

            let COB;
            let arrayofMats = [];

            resultObject = {};
            let locationsMat = new cv.matFromArray(3, 3, cv.CV_8UC3, locationMatrix);
            let dst = new cv.Mat();
            let edgesMat = new cv.Mat();
            let channelMat = new cv.Mat();
            /////
            // read img

            // load local image file with jimp. It supports jpg, png, bmp, tiff and gif:
            try {
                var jimpSrc = await Jimp.read(image);
            } catch (e) {
                const error = new Error("broken url");
                resolve({
                    id: ("0" + id).slice(-2),
                    error: {
                        message: error.message,
                        stack: error.stack,
                        urlAttempted: image,
                    },
                });
            }
            // `jimpImage.bitmap` property has the decoded ImageData that we can use to create a cv:Mat
            let src = cv.matFromImageData(jimpSrc.bitmap);
            let zerosMat = new cv.Mat(src.rows, src.cols, cv.CV_8UC1, new cv.Scalar(0));
            let onesMat = new cv.Mat(src.rows, src.cols, cv.CV_8UC1, new cv.Scalar(255));
            let weightsMat = src.clone();

            // initaize point at img center
            COB = new cv.Point(parseInt(src.cols / 2), parseInt(src.rows / 2));

            //rgb -> gray
            cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

            // inverse (initialize weightsMat)
            // cv.bitwise_not(src, dst);

            // flip rgb -> bgr
            // cv.cvtColor(dst, weightsMat, cv.COLOR_RGBA2BGR, 0);

            // blur
            // cv.blur(dst, dst, new cv.Size(BLUR_SIZE, BLUR_SIZE));

            ///////-->
            // rate edges
            // canny eadge detection
            cv.Canny(dst, edgesMat, CANNY_THRESHOLD, CANNY_THRESHOLD);

            // threshold
            cv.threshold(edgesMat, edgesMat, THRESHHOLD, 255, cv.THRESH_BINARY);

            // cnvrt back bfr save
            cv.cvtColor(edgesMat, edgesMat, cv.COLOR_GRAY2RGBA, 0);

            if (saveImageLocaly) {
                // saveImg(edgesMat, ("0" + id).slice(-2) + "-edge");
                resultObject.edge = ("0" + id).slice(-2) + "-edge.jpg";
            }

            // add to result
            resultObject.imgId = ("0" + id).slice(-2);

            await cv.addWeighted(weightsMat, 1 - EDGE_WEIGHT, edgesMat, EDGE_WEIGHT, EDGE_GAMMA, weightsMat, -1);

            ////rate locations
            // locations
            await cv.resize(locationsMat, locationsMat, weightsMat.size(), 0, 0, cv.INTER_LINEAR);
            cv.cvtColor(locationsMat, locationsMat, cv.COLOR_RGB2RGBA, 0);

            // saveImg(weightsMat, "weightsMatAfter");
            //  async function(_locationsMat){
            cv.addWeighted(weightsMat, 1 - LOCATIONS_WEIGHT, locationsMat, LOCATIONS_WEIGHT, EDGE_GAMMA, weightsMat, -1);

            if (saveImageLocaly) {
                // saveImg(weightsMat, ("0" + id).slice(-2) + "-rated-pixels");
                resultObject.ratedPixels = ("0" + id).slice(-2) + "-rated-pixels.jpg";
            }

            ////
            //split img
            arrayofMats = [];
            let channelsCenters = [];
            let vecOfMats = new cv.MatVector();
            cv.split(weightsMat, vecOfMats);
            for (let channelIndex = 0; channelIndex < 4; channelIndex++) {
                arrayofMats.push(vecOfMats.get(channelIndex));
            }
            arrayofMats.forEach((channel, channelIndex) => {
                // saveImg(img, "location2");
                let arr = new cv.moments(channel);
                let vecToMerge = new cv.MatVector();

                // COB
                COB = new cv.Point(arr.m10 / arr.m00, arr.m01 / arr.m00);

                //DRAW ON SRC
                if (channelIndex != 3) {
                    channelsCenters.push(COB);
                    if (saveImageLocaly) {
                        cv.circle(src, COB, 5, new cv.Scalar(0, 0, 0, 255), 5, cv.LINE_8, 0);
                        cv.circle(src, COB, 4, new cv.Scalar(resultsOptions[channelIndex].color[0], resultsOptions[channelIndex].color[1], resultsOptions[channelIndex].color[2], 255), 5, cv.LINE_8, 0);

                        COB.x = COB.x.toFixed(2);
                        COB.y = COB.y.toFixed(2);
                        // cv.putText(src,COB.x.toFixed(2) + ", " + COB.y.toFixed(2), new cv.Point(COB.x + 10, COB.y - 10),0,1, new cv.Scalar(255,0,0),cv.LINE_8,0, false);
                    }
                }

                // channel object
                resultObject[resultsOptions[channelIndex].channelName] = {};

                //dimensions
                resultObject.dimensions = `${src.cols}x${src.rows}`;
                // write channel centers
                // resultObject[resultsOptions[channelIndex].channelName].COB = COB;

                // save balance percent
                // [resultObject[resultsOptions[channelIndex].channelName].distanceToCenter, resultObject[resultsOptions[channelIndex].channelName].balancePercent] = calcBalancePercentage(src, COB);
                [ , resultObject[resultsOptions[channelIndex].channelName].aesthetic_score] = calcBalancePercentage(src, COB);

                // add moments to result
                // resultObject[resultsOptions[channelIndex].channelName].imageMoments = {
                //     m00: arr.m00,
                //     m01: arr.m01,
                //     m10: arr.m10,
                // };
                // save channel
                if (saveImageLocaly) {
                    switch (resultsOptions[channelIndex].channelName) {
                        case "red_channel":
                            vecToMerge.push_back(channel);
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(onesMat);
                            break;
                        case "green_channel":
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(channel);
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(onesMat);

                            break;
                        case "blue_channel":
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(zerosMat);
                            vecToMerge.push_back(channel);
                            vecToMerge.push_back(onesMat);

                            break;
                        default:
                    }
                    if (channelIndex != 3) {
                        try {
                            cv.merge(vecToMerge, channelMat);
                        } catch (e) {
                            console.log(e);
                        }
                        if (saveImageLocaly) {
                            cv.cvtColor(channel, channel, cv.COLOR_GRAY2RGBA, 0);
                            // saveImg(channelMat, ("0" + id).slice(-2) + "-" + resultsOptions[i][0]);
                        }
                    }

                    resultObject[resultsOptions[channelIndex].channelName].url = ("0" + id).slice(-2) + "-" + resultsOptions[channelIndex].channelName + ".jpg";
                }
                channel.delete();
                vecToMerge.delete();

                arr = null;
            });
            if (saveImageLocaly) {
                // saveImg(src, ("0" + id).slice(-2) + "-image-feedback");
                resultObject.imageFeedback = ("0" + id).slice(-2) + "-image-feedback.jpg";
            }

            
            // average balance
            const aveCenter = weightedAverageThree(...channelsCenters);
            [resultObject.distanceToCenter, resultObject.balanceAllCoefficients] = calcBalancePercentage(src, aveCenter);
            resultObject.distances = await getDistances(src, aveCenter);
            
            //get avareg color
            resultObject.averageColor = '#' + rgbHex(...cv.mean(src).slice(0, 3)).toUpperCase();

            // delete mats
            src.delete();
            zerosMat.delete();
            onesMat.delete();
            dst.delete();
            weightsMat.delete();
            edgesMat.delete();
            channelMat.delete();
            locationsMat.delete();

            resolve({
                id: resultObject.imgId,
                aesthetic_score: resultObject.balanceAllCoefficients,
                dimensions: resultObject.dimensions,
                distances: resultObject.distances,
                imageFeedback: resultObject.imageFeedback,
                // distanceToCenter: resultObject.distanceToCenter,
                url: resultObject.url,
                edge: resultObject.edge,
                ratedPixels: resultObject.ratedPixels,
                average_color: resultObject.averageColor,
                red_channel: resultObject.red_channel,
                green_channel: resultObject.green_channel,
                blue_channel: resultObject.blue_channel,
            });

            function weightedAverageThree(_redPoint, _greenPoint, _bluePoint) {
                return new cv.Point(
                    (_redPoint.x * RED_COEFFICIENT + _greenPoint.x * GREEN_COEFFICIENT + _bluePoint.x * BLUE_COEFFICIENT) / (RED_COEFFICIENT + GREEN_COEFFICIENT + BLUE_COEFFICIENT),
                    (_redPoint.y * RED_COEFFICIENT + _greenPoint.y * GREEN_COEFFICIENT + _bluePoint.y * BLUE_COEFFICIENT) / (RED_COEFFICIENT + GREEN_COEFFICIENT + BLUE_COEFFICIENT)
                );
            }
        });

        async function getDistances(mat, centerPoint) {
        // distance to lines:

            let distancesResultObject = {};

            // optional: SSE support (Streaming SIMD Extensions)
            // optional: GPU support

            // get distances and aesthetic score
            //
            const matDimentions = {cols: mat.cols, rows: mat.rows};

            // 1. cneter point
            [distancesResultObject.d1, distancesResultObject.d1_aesthetic_score] = calcBalancePercentage(mat, centerPoint);
            
            // 2.Vertical: x=width/2
            distancesResultObject.d2 = 
              Math.abs(mat.cols - centerPoint.x);
            distancesResultObject.d2_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d2)
            
            // 3. Horizontal: y=height/2
            distancesResultObject.d3 = Math.abs(mat.rows - centerPoint.y);
            distancesResultObject.d3_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d3)
            
              // 4. DIAG: y=-(height/width)*x+height
            distancesResultObject.d4 = 
              Math.abs((mat.rows/mat.cols) * centerPoint.x + centerPoint.y - mat.rows) /
              Math.sqrt(Math.pow((mat.rows/mat.cols), 2) + 1);
              distancesResultObject.d4_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d4)
              
            // 5. ANTID: y=(height/width)*x
            distancesResultObject.d5 = 
              Math.abs((- mat.rows/mat.cols) * centerPoint.x + centerPoint.y - mat.rows) /
              Math.sqrt(Math.pow((- mat.rows/mat.cols), 2) + 1);
            distancesResultObject.d5_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d5)
            
            // 6. RoT1: x=width/3
            distancesResultObject.d6 = Math.abs((mat.cols / 3) - centerPoint.x);
            distancesResultObject.d6_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d6)
            
            // 7. RoT2: x=(2*width)/3
            distancesResultObject.d7 = Math.abs((2 * mat.cols / 3) - centerPoint.x);
            distancesResultObject.d7_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d7)
            
            // 8. RoT3: y=height/3
            distancesResultObject.d8 = Math.abs((mat.rows / 3) - centerPoint.y);
            distancesResultObject.d8_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d8)
            
            // 9. RoT4: y=(2*height)/3
            distancesResultObject.d9 = Math.abs((2 * mat.rows / 3) - centerPoint.y);
            distancesResultObject.d9_aesthetic_score = 
              calcDistancePercentage(matDimentions, distancesResultObject.d9)
            
            //  distancesResultObject <= getMinimum
            distancesResultObject.highest_aesthetic_score = 
              getHighestAestheticScore(distancesResultObject) 
            //  distancesResultObject <= getAverage
            distancesResultObject.average_aesthetic_score = 
              getAverageAestheticScore(distancesResultObject) 
            
            //  distancesResultObject <= getWeightedAverage
            distancesResultObject.weighted_average_distance = 
              getWeightedAverageAestheticScore(distancesResultObject) 

            //order
            distancesResultObject = Object.keys(distancesResultObject)
              .reverse()
              .reduce((result, key) => {result[key] = distancesResultObject[key]; return result}, {})
            
            // draw colored lines and distances (for visual testing)
            // draw colored distance lines and and text (distance value)

            // add to channel object

            // check visually,
            // check garbage collection and cpu - 
            // write tests - TBD
            // monitor for errors

            return distancesResultObject;
        }

        function getWeightedAverageAestheticScore(distancesObj){
          const A = 0.4;
          const B = 0.3;
          const C = 0.2;
          const D = 0.1;

          return (A * distancesObj.d6 + B * distancesObj.d7 + C * distancesObj.d9 + D * distancesObj.d5) / 4 
        }

        function getAverageAestheticScore(distancesObj){
          let length = 1;
          return Object.keys(distancesObj)
            .filter(key => key.slice(-16) === "_aesthetic_score" && key.length === 18)
            .reduce((sum, current,i, arr) => {
              length = arr.length;
              return sum + distancesObj[current];
            }, 0) / length;
        }
        
        function getHighestAestheticScore(distancesObj){
          return Object.keys(distancesObj)
            .filter(key => key.slice(-16) === "_aesthetic_score" )
            .reduce((max, current) => {
              if(distancesObj[current] > max.aesthetic_score) max = {aesthetic_score: distancesObj[current], distance_line: current}  
              return max;
            }, {aesthetic_score :0, distance_line: null});
            
        }
        function calcBalancePercentage(mat, point) {
            let totalDistance = Math.sqrt((mat.cols / 2) * (mat.cols / 2) + (mat.rows / 2) * (mat.rows / 2));

            let diff = Math.sqrt((point.x - mat.cols / 2) * (point.x - mat.cols / 2) + (point.y - mat.rows / 2) * (point.y - mat.rows / 2));
            return [diff, 100 * (1 - diff / totalDistance)];
        }

        function calcDistancePercentage(mat, distance) {
          let totalDistance = Math.sqrt((mat.cols / 2) * (mat.cols / 2) + (mat.rows / 2) * (mat.rows / 2));
          return 100 * (1 - distance / totalDistance);
      }
        async function saveImg(mat, imgName) {
            return new Promise((resolve, reject) => {
                try {
                    new Jimp({
                        width: mat.cols,
                        height: mat.rows,
                        data: Buffer.from(mat.data),
                    }).write(`images/${imgName}.jpg`);
                    // mat.delete();
                    resolve(imgName);
                } catch (e) {
                    console.log("error caught: ");
                    console.log(e);
                    reject(e);
                }
            });
        }
    },
};
