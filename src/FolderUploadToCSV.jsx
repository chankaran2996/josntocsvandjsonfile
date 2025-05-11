import React, { useState } from 'react';
import CsvDownload from 'react-json-to-csv';
import DownloadJSON from './DownloadJSON';

const FolderUploadToCSV = () => {
    const [data, setData] = useState();
  const handleFiles = async (event) => {
    // console.log(event.target.files);
    const files = event.target.files;
    // console.log(files);
    

    let jsonData = {};
    // let arr = []
    // for(let i = 0; i < files.length; i++) {
    //     let fileSplit = files[i].webkitRelativePath.split('/');
    //     if(fileSplit[fileSplit.length-1]== "bioData.json") {
    //         continue;
    //     }
        
    //     if(!arr.includes(fileSplit[fileSplit.length - 2])) {
    //         arr.push(fileSplit[fileSplit.length - 2]);
    //     }
    // }
    // console.log(arr);
    for(let i = 0; i < files.length; i++) {
        let fileSplit = files[i].webkitRelativePath.split('/');
        if(!fileSplit[fileSplit.length - 1].split(".")[1] == "json") {
            continue;
        }
        // console.log(fileSplit);
        if(fileSplit[fileSplit.length - 1] == "bioData.json") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
                jsonData[fileSplit[fileSplit.length - 2]] = {
                    Name : allData[0].Name,
                    Age : allData[0].Age,
                    Email: allData[0].Email
                };
        }

        if(fileSplit[fileSplit.length - 2] == "VisualAcuityData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            if(!jsonData[fileSplit[fileSplit.length - 3]].VisualAcuityData) {
                jsonData[fileSplit[fileSplit.length - 3]].VisualAcuityData = [{
                    Eye: allData[0].VisualAcuityData[0]["Eye"],
                    "Final Acuity": allData[0].VisualAcuityData[0]["Final Acuity"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }
            else {
                const myData = {
                    Eye: allData[0].VisualAcuityData[0]["Eye"],
                    "Final Acuity": allData[0].VisualAcuityData[0]["Final Acuity"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].VisualAcuityData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "VisualPursuitData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].VisualPursuitData["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].VisualPursuitData){
                jsonData[fileSplit[fileSplit.length - 3]].VisualPursuitData = [{
                    data: allData[0].VisualPursuitData["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }
            else {
                const myData = {
                    data: allData[0].VisualPursuitData["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].VisualPursuitData.push(myData);
            }
            

        }

        if(fileSplit[fileSplit.length - 2] == "SimpleLegReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].SimpleLegReactionData[0].Hand);
            // console.log(allData[0].SimpleLegReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData = [{
                    Leg: allData[0].SimpleLegReactionData[0].Hand,
                    "Time Insights": allData[0].SimpleLegReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Leg: allData[0].SimpleLegReactionData[0].Hand,
                    "Time Insights": allData[0].SimpleLegReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData.push(myData);
            }
            // if(!jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData){
            //     jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData = [{
            //         data: allData[0].SimpleLegReactionData["Time Insights"],
            //         "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
            //     }];
            // }
            // else {
            //     const myData = {
            //         data: allData[0].SimpleLegReactionData["Time Insights"],
            //         "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
            //     }
            //     jsonData[fileSplit[fileSplit.length - 3]].SimpleLegReactionData.push(myData);
            // }
        }

        if(fileSplit[fileSplit.length - 2] == "SimpleHandReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].SimpleHandReactionData[0].Hand);
            // console.log(allData[0].SimpleHandReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].SimpleHandReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].SimpleHandReactionData = [{
                    Hand: allData[0].SimpleHandReactionData[0].Hand,
                    "Time Insights": allData[0].SimpleHandReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Hand: allData[0].SimpleHandReactionData[0].Hand,
                    "Time Insights": allData[0].SimpleHandReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].SimpleHandReactionData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "ShortTermMemoryData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].ShortTermMemoryData)
            if(!jsonData[fileSplit[fileSplit.length - 3]].ShortTermMemoryData) {
                jsonData[fileSplit[fileSplit.length - 3]].ShortTermMemoryData = [{
                    ShortTermMemoryData: allData[0].ShortTermMemoryData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    ShortTermMemoryData: allData[0].ShortTermMemoryData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].ShortTermMemoryData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "PS5Data") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].PS5Data)
            if(!jsonData[fileSplit[fileSplit.length - 3]].PS5Data) {
                jsonData[fileSplit[fileSplit.length - 3]].PS5Data = [{
                    PS5Data: allData[0].PS5Data,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    PS5Data: allData[0].PS5Data,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].PS5Data.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "MemoryData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].MemoryData["Total Levels"])
            if(!jsonData[fileSplit[fileSplit.length - 3]].MemoryData) {
                jsonData[fileSplit[fileSplit.length - 3]].MemoryData = [{
                    "Total Levels": allData[0].MemoryData["Total Levels"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    "Total Levels": allData[0].MemoryData["Total Levels"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].MemoryData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "DynamicVisualAcuityData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].DynamicVisualAcuityData[0]["Eye"]);
            // console.log(allData[0].DynamicVisualAcuityData[0]["Final Acuity"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].DynamicVisualAcuityData) {
                jsonData[fileSplit[fileSplit.length - 3]].DynamicVisualAcuityData = [{
                    Eye: allData[0].DynamicVisualAcuityData[0]["Eye"],
                    "Final Acuity": allData[0].DynamicVisualAcuityData[0]["Final Acuity"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Eye: allData[0].DynamicVisualAcuityData[0]["Eye"],
                    "Final Acuity": allData[0].DynamicVisualAcuityData[0]["Final Acuity"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].DynamicVisualAcuityData.push(myData);
            }
            
        }

        if(fileSplit[fileSplit.length - 2] == "ContrastSensitivityData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].ContrastSensitivityData[0]["Eye"]);
            // console.log(allData[0].ContrastSensitivityData[0]["Final Contrast"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].ContrastSensitivityData) {
                jsonData[fileSplit[fileSplit.length - 3]].ContrastSensitivityData = [{
                    Eye: allData[0].ContrastSensitivityData[0]["Eye"],
                    "Final Contrast": allData[0].ContrastSensitivityData[0]["Final Contrast"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Eye: allData[0].ContrastSensitivityData[0]["Eye"],
                    "Final Contrast": allData[0].ContrastSensitivityData[0]["Final Contrast"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].ContrastSensitivityData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "ComplexLegReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].ComplexLegReactionData[0]["Hand"]);
            // console.log(allData[0].ComplexLegReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].ComplexLegReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].ComplexLegReactionData = [{
                    Leg: allData[0].ComplexLegReactionData[0]["Hand"],
                    "Time Insights": allData[0].ComplexLegReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Leg: allData[0].ComplexLegReactionData[0]["Hand"],
                    "Time Insights": allData[0].ComplexLegReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].ComplexLegReactionData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "ComplexHandReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].ComplexHandReactionData[0]["Hand"]);
            // console.log(allData[0].ComplexHandReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].ComplexHandReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].ComplexHandReactionData = [{
                    Hand: allData[0].ComplexHandReactionData[0]["Hand"],
                    "Time Insights": allData[0].ComplexHandReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    Hand: allData[0].ComplexHandReactionData[0]["Hand"],
                    "Time Insights": allData[0].ComplexHandReactionData[0]["Time Insights"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].ComplexHandReactionData.push(myData);
            }
        } 

        if(fileSplit[fileSplit.length - 2] == "AnticipationData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0].AnticipationData)
            if(!jsonData[fileSplit[fileSplit.length - 3]].AnticipationData) {
                jsonData[fileSplit[fileSplit.length - 3]].AnticipationData = [{
                    AnticipationData: allData[0].AnticipationData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    AnticipationData: allData[0].AnticipationData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].AnticipationData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "SingleHandReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].SingleHandReactionData[0]["Hand"]);
            // console.log(allData[0].SingleHandReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].SingleHandReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].SingleHandReactionData = [{
                    SingleHandReactionData: allData[0].SingleHandReactionData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    SingleHandReactionData: allData[0].SingleHandReactionData,
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].SingleHandReactionData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "ColorVisionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0]["incorrect_answers"])
            // console.log(allData[0]["total_correct"]);
            // console.log(allData[0][""]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].ColorVisionData) {
                jsonData[fileSplit[fileSplit.length - 3]].ColorVisionData = [{
                    incorrect_answers: allData[0]["incorrect_answers"],
                    total_correct: allData[0]["total_correct"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    incorrect_answers: allData[0]["incorrect_answers"],
                    total_correct: allData[0]["total_correct"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].ColorVisionData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "BothLegsReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].BothLegsReactionData[0]["Hand"]);
            // console.log(allData[0].BothLegsReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].BothLegsReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].BothLegsReactionData = [{
                    "Left Leg": allData[0].BothLegsReactionData["Left Leg"],
                    "Right Leg": allData[0].BothLegsReactionData["Right Leg"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    "Left Leg": allData[0].BothLegsReactionData["Left Leg"],
                    "Right Leg": allData[0].BothLegsReactionData["Right Leg"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].BothLegsReactionData.push(myData);
            }
        }

        if(fileSplit[fileSplit.length - 2] == "BothHandsReactionData") {
            const allData = [];
            const text = await files[i].text();
            const json = JSON.parse(text);
            allData.push(...(Array.isArray(json) ? json : [json]));
            // console.log(allData[0])
            // console.log(allData[0].BothHandsReactionData[0]["Hand"]);
            // console.log(allData[0].BothHandsReactionData[0]["Time Insights"]);
            if(!jsonData[fileSplit[fileSplit.length - 3]].BothHandsReactionData) {
                jsonData[fileSplit[fileSplit.length - 3]].BothHandsReactionData = [{
                    "Left Hand": allData[0].BothHandsReactionData["Left Hand"],
                    "Right Hand": allData[0].BothHandsReactionData["Right Hand"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }];
            }else {
                const myData = {
                    "Left Hand": allData[0].BothHandsReactionData["Left Hand"],
                    "Right Hand": allData[0].BothHandsReactionData["Right Hand"],
                    "Taken at":fileSplit[fileSplit.length - 1].split('.')[0]
                }
                jsonData[fileSplit[fileSplit.length - 3]].BothHandsReactionData.push(myData);
            }
        }
    }

    let convertjson = [];
    let headers = Object.keys(jsonData);
    // console.log(headers);
    // setData([{
    //     name: "Name",
    //     age: "Age",
    //     email: "Email",
    //     "Visual Acuity Data": "VisualAcuityData",
    //     "Visual Pursuit Data": "VisualPursuitData",
    //     "Simple Leg Reaction Data": "SimpleLegReactionData",
    //     "Simple Hand Reaction Data": "SimpleHandReactionData",
    //     "Short Term Memory Data": "ShortTermMemoryData",
    //     "PS5 Data": "PS5Data",
    //     "Memory Data": "MemoryData",
    //     "Dynamic Visual Acuity Data": "DynamicVisualAcuityData",
    //     "Contrast Sensitivity Data": "ContrastSensitivityData",
    //     "Complex Leg Reaction Data": "ComplexLegReactionData",
    //     "Complex Hand Reaction Data": "ComplexHandReactionData",
    //     "Anticipation Data": "AnticipationData",
    //     "Single Hand Reaction Data": "SingleHandReactionData",
    //     "Color Vision Data": "ColorVisionData",
    //     "Both Legs Reaction Data": "BothLegsReactionData",
    //     "Both Hands Reaction Data": "BothHandsReactionData",

    // },
    // {
    //     name: "Name1",
    //     age: "Age",
    //     email: "Email",
    //     "Visual Acuity Data": "VisualAcuityData",
    //     "Visual Pursuit Data": "VisualPursuitData",
    //     "Simple Leg Reaction Data": "SimpleLegReactionData",
    //     "Simple Hand Reaction Data": "SimpleHandReactionData",
    //     "Short Term Memory Data": "ShortTermMemoryData",
    //     "PS5 Data": "PS5Data",
    //     "Memory Data": "MemoryData",
    //     "Dynamic Visual Acuity Data": "DynamicVisualAcuityData",
    //     "Contrast Sensitivity Data": "ContrastSensitivityData",
    //     "Complex Leg Reaction Data": "ComplexLegReactionData",
    //     "Complex Hand Reaction Data": "ComplexHandReactionData",
    //     "Anticipation Data": "AnticipationData",
    //     "Single Hand Reaction Data": "SingleHandReactionData",
    //     "Color Vision Data": "ColorVisionData",
    //     "Both Legs Reaction Data": "BothLegsReactionData",
    //     "Both Hands Reaction Data": "BothHandsReactionData",
        
    // },
    // {
    //     name: "Name2",
    //     age: "Age",
    //     email: "Email",
    //     "Visual Acuity Data": "VisualAcuityData",
    //     "Visual Pursuit Data": "VisualPursuitData",
    //     "Simple Leg Reaction Data": "SimpleLegReactionData",
    //     "Simple Hand Reaction Data": "SimpleHandReactionData",
    //     "Short Term Memory Data": "ShortTermMemoryData",
    //     "PS5 Data": "PS5Data",
    //     "Memory Data": "MemoryData",
    //     "Dynamic Visual Acuity Data": "DynamicVisualAcuityData",
    //     "Contrast Sensitivity Data": "ContrastSensitivityData",
    //     "Complex Leg Reaction Data": "ComplexLegReactionData",
    //     "Complex Hand Reaction Data": "ComplexHandReactionData",
    //     "Anticipation Data": "AnticipationData",
    //     "Single Hand Reaction Data": "SingleHandReactionData",
    //     "Color Vision Data": "ColorVisionData",
    //     "Both Legs Reaction Data": "BothLegsReactionData",
    //     "Both Hands Reaction Data": "BothHandsReactionData",
        
    // },
    // {
    //     name: "Name3",
    //     age: "Age",
    //     email: "Email",
    //     "Visual Acuity Data": "VisualAcuityData",
    //     "Visual Pursuit Data": "VisualPursuitData",
    //     "Simple Leg Reaction Data": "SimpleLegReactionData",
    //     "Simple Hand Reaction Data": "SimpleHandReactionData",
    //     "Short Term Memory Data": "ShortTermMemoryData",
    //     "PS5 Data": "PS5Data",
    //     "Memory Data": "MemoryData",
    //     "Dynamic Visual Acuity Data": "DynamicVisualAcuityData",
    //     "Contrast Sensitivity Data": "ContrastSensitivityData",
    //     "Complex Leg Reaction Data": "ComplexLegReactionData",
    //     "Complex Hand Reaction Data": "ComplexHandReactionData",
    //     "Anticipation Data": "AnticipationData",
    //     "Single Hand Reaction Data": "SingleHandReactionData",
    //     "Color Vision Data": "ColorVisionData",
    //     "Both Legs Reaction Data": "BothLegsReactionData",
    //     "Both Hands Reaction Data": "BothHandsReactionData",
        
    // }]);
    
    for(let i = 0; i < headers.length; i++) {
        const dumyJson = {}
        dumyJson.Name = jsonData[headers[i]].Name;
        dumyJson.Age = jsonData[headers[i]].Age;
        dumyJson.Email = jsonData[headers[i]].Email;
        if(jsonData[headers[i]].VisualAcuityData) {
            for(let j = 1; j < jsonData[headers[i]].VisualAcuityData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].VisualAcuityData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Visual Acuity Data eye"] = jsonData[headers[i]].VisualAcuityData[j]["Eye"];
                    jloopdata["Visual Acuity Data"] = jsonData[headers[i]].VisualAcuityData[j]["Final Acuity"];
                    jloopdata["Visual Acuity Data Taken at"] = jsonData[headers[i]].VisualAcuityData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Visual Acuity Data eye"] = jsonData[headers[i]].VisualAcuityData[0]["Eye"];
            dumyJson["Visual Acuity Data"] = jsonData[headers[i]].VisualAcuityData[0]["Final Acuity"];
            dumyJson["Visual Acuity Data Taken at"] = jsonData[headers[i]].VisualAcuityData[0]["Taken at"];
        }
        if(jsonData[headers[i]].VisualPursuitData) {
            for(let j = 1; j < jsonData[headers[i]].VisualPursuitData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].VisualPursuitData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Visual Pursuit Level clr"] = jsonData[headers[i]].VisualPursuitData[j]["data"].length;
                    jloopdata["Visual Pursuit Taken at"] = jsonData[headers[i]].VisualPursuitData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Visual Pursuit Level clr"] = jsonData[headers[i]].VisualPursuitData[0]["data"].length;
            dumyJson["Visual Pursuit Taken at"] = jsonData[headers[i]].VisualPursuitData[0]["Taken at"];
        }

        if(jsonData[headers[i]].SimpleLegReactionData) {
            for(let j = 0; j < jsonData[headers[i]].SimpleLegReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].SimpleLegReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].SimpleLegReactionData[j]["Time Insights"].length; k++) {
                        jloopdata[`Simple Leg Reaction Level ${k+1}`] = jsonData[headers[i]].SimpleLegReactionData[j]["Time Insights"][k]["Reaction Time"];
                    }
                    jloopdata["Simple Leg Reaction Leg"] = jsonData[headers[i]].SimpleLegReactionData[j]["Leg"];
                    jloopdata["Simple Leg Reaction Taken at"] = jsonData[headers[i]].SimpleLegReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
        }

        if(jsonData[headers[i]].SimpleHandReactionData) {
            for(let j = 1; j < jsonData[headers[i]].SimpleHandReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].SimpleHandReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].SimpleHandReactionData[j]["Time Insights"].length; k++) {
                        jloopdata[`Simple Hand Reaction Level ${k+1}`] = jsonData[headers[i]].SimpleHandReactionData[j]["Time Insights"][k]["Reaction Time"];
                    }
                    jloopdata["Simple Hand Reaction Hand"] = jsonData[headers[i]].SimpleHandReactionData[j]["Hand"];
                    jloopdata["Simple Hand Reaction Taken at"] = jsonData[headers[i]].SimpleHandReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
        }

        if(jsonData[headers[i]].ShortTermMemoryData) {
            for(let j = 1; j < jsonData[headers[i]].ShortTermMemoryData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].ShortTermMemoryData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Short Term Memory Totel level clr"] = jsonData[headers[i]].ShortTermMemoryData[j]["ShortTermMemoryData"].length;
                    jloopdata["Short Term Memory Taken at"] = jsonData[headers[i]].ShortTermMemoryData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Short Term Memory Totel level clr"] = jsonData[headers[i]].ShortTermMemoryData[0]["ShortTermMemoryData"].length;
            dumyJson["Short Term Memory Taken at"] = jsonData[headers[i]].ShortTermMemoryData[0]["Taken at"];
        }

        if(jsonData[headers[i]].PS5Data) {
            for(let j = 1; j < jsonData[headers[i]].PS5Data.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].PS5Data[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["PS5 Circle Path"] = jsonData[headers[i]].PS5Data[j]["PS5Data"]["Circle Path"];
                    jloopdata["PS5 Curved Path"] = jsonData[headers[i]].PS5Data[j]["PS5Data"]["Curved Path"];
                    jloopdata["PS5 Line Path"] = jsonData[headers[i]].PS5Data[j]["PS5Data"]["Line Path"];
                    jloopdata["PS5 Square Path"] = jsonData[headers[i]].PS5Data[j]["PS5Data"]["Square Path"];
                    jloopdata["PS5 Taken at"] = jsonData[headers[i]].PS5Data[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["PS5 Circle Path"] = jsonData[headers[i]].PS5Data[0]["PS5Data"]["Circle Path"];
            dumyJson["PS5 Curved Path"] = jsonData[headers[i]].PS5Data[0]["PS5Data"]["Curved Path"];
            dumyJson["PS5 Line Path"] = jsonData[headers[i]].PS5Data[0]["PS5Data"]["Line Path"];
            dumyJson["PS5 Square Path"] = jsonData[headers[i]].PS5Data[0]["PS5Data"]["Square Path"];
            dumyJson["PS5 Data"] = jsonData[headers[i]].PS5Data[0]["PS5Data"].length;
            dumyJson["PS5 Data Taken at"] = jsonData[headers[i]].PS5Data[0]["Taken at"];
        }

        if(jsonData[headers[i]].MemoryData) {
            for(let j = 1; j < jsonData[headers[i]].MemoryData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].MemoryData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Memory Total Levels"] = jsonData[headers[i]].MemoryData[j]["Total Levels"];
                    jloopdata["Memory Taken at"] = jsonData[headers[i]].MemoryData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Memory Total Levels"] = jsonData[headers[i]].MemoryData[0]["Total Levels"];
            dumyJson["Memory Taken at"] = jsonData[headers[i]].MemoryData[0]["Taken at"];
        }

        if(jsonData[headers[i]].DynamicVisualAcuityData) {
            for(let j = 1; j < jsonData[headers[i]].DynamicVisualAcuityData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].DynamicVisualAcuityData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Dynamic Visual Acuity Eye"] = jsonData[headers[i]].DynamicVisualAcuityData[j]["Eye"];
                    jloopdata["Dynamic Visual Acuity Final Acuity"] = jsonData[headers[i]].DynamicVisualAcuityData[j]["Final Acuity"];
                    jloopdata["Dynamic Visual Acuity Taken at"] = jsonData[headers[i]].DynamicVisualAcuityData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Dynamic Visual Acuity Eye"] = jsonData[headers[i]].DynamicVisualAcuityData[0]["Eye"];
            dumyJson["Dynamic Visual Acuity Final Acuity"] = jsonData[headers[i]].DynamicVisualAcuityData[0]["Final Acuity"];
            dumyJson["Dynamic Visual Acuity Taken at"] = jsonData[headers[i]].DynamicVisualAcuityData[0]["Taken at"];
        }

        if(jsonData[headers[i]].ContrastSensitivityData) {
            for(let j = 1; j < jsonData[headers[i]].ContrastSensitivityData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].ContrastSensitivityData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Contrast Sensitivity Eye"] = jsonData[headers[i]].ContrastSensitivityData[j]["Eye"];
                    jloopdata["Contrast Sensitivity Final Contrast"] = jsonData[headers[i]].ContrastSensitivityData[j]["Final Contrast"];
                    jloopdata["Contrast Sensitivity Taken at"] = jsonData[headers[i]].ContrastSensitivityData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Contrast Sensitivity Eye"] = jsonData[headers[i]].ContrastSensitivityData[0]["Eye"];
            dumyJson["Contrast Sensitivity Final Contrast"] = jsonData[headers[i]].ContrastSensitivityData[0]["Final Contrast"];
            dumyJson["Contrast Sensitivity Taken at"] = jsonData[headers[i]].ContrastSensitivityData[0]["Taken at"];
        }

        if(jsonData[headers[i]].ComplexLegReactionData) {
            for(let j = 1; j < jsonData[headers[i]].ComplexLegReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].ComplexLegReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].ComplexLegReactionData[j]["Time Insights"].length; k++) {
                        jloopdata[`Complex Leg Reaction Level ${k+1}`] = jsonData[headers[i]].ComplexLegReactionData[j]["Time Insights"][k]["Reaction Time"];
                    }
                    jloopdata["Complex Leg Reaction Leg"] = jsonData[headers[i]].ComplexLegReactionData[j]["Leg"];
                    jloopdata["Complex Leg Reaction Taken at"] = jsonData[headers[i]].ComplexLegReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Complex Leg Reaction Leg"] = jsonData[headers[i]].ComplexLegReactionData[0]["Leg"];
            dumyJson["Complex Leg Reaction Taken at"] = jsonData[headers[i]].ComplexLegReactionData[0]["Taken at"];
        }

        if(jsonData[headers[i]].ComplexHandReactionData) {
            for(let j = 1; j < jsonData[headers[i]].ComplexHandReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].ComplexHandReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].ComplexHandReactionData[j]["Time Insights"].length; k++) {
                        jloopdata[`Complex Hand Reaction Level ${k+1}`] = jsonData[headers[i]].ComplexHandReactionData[j]["Time Insights"][k]["Reaction Time"];
                    }
                    jloopdata["Complex Hand Reaction Hand"] = jsonData[headers[i]].ComplexHandReactionData[j]["Hand"];
                    jloopdata["Complex Hand Reaction Taken at"] = jsonData[headers[i]].ComplexHandReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Complex Hand Reaction Hand"] = jsonData[headers[i]].ComplexHandReactionData[0]["Hand"];
            dumyJson["Complex Hand Reaction Taken at"] = jsonData[headers[i]].ComplexHandReactionData[0]["Taken at"];
        }

        // if(jsonData[headers[i]].AnticipationData) {
        //     for(let j = 1; j < jsonData[headers[i]].AnticipationData.length; j++) {
        //         let jloopdata = {}
        //         if(jsonData[headers[i]].AnticipationData[j]) {
        //             jloopdata.Name = jsonData[headers[i]].Name;
        //             jloopdata.Age = jsonData[headers[i]].Age;
        //             jloopdata.Email = jsonData[headers[i]].Email;
        //             jloopdata["Anticipation Data"] = jsonData[headers[i]].AnticipationData[j]["AnticipationData"];
        //             jloopdata["Anticipation Taken at"] = jsonData[headers[i]].AnticipationData[j]["Taken at"];
        //         }
        //         convertjson.push(jloopdata);
        //     }
        //     dumyJson["Anticipation Data"] = jsonData[headers[i]].AnticipationData[0]["AnticipationData"];
        //     dumyJson["Anticipation Taken at"] = jsonData[headers[i]].AnticipationData[0]["Taken at"];
        // }

        // dumyJson["Visual Acuity Data eye"] = jsonData[headers[i]].VisualAcuityData[0].Eye;
        
        
        if(jsonData[headers[i]].SingleHandReactionData) {
            for(let j = 1; j < jsonData[headers[i]].SingleHandReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].SingleHandReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].SingleHandReactionData[j].SingleHandReactionData.length; k++) {
                        jloopdata[`Single Hand Reaction Level ${k+1}`] = jsonData[headers[i]].SingleHandReactionData[j]["SingleHandReactionData"][k]["Reaction Time"];
                    }
                    jloopdata["Single Hand Reaction Hand"] = jsonData[headers[i]].SingleHandReactionData[j]["Hand"];
                    jloopdata["Single Hand Reaction Taken at"] = jsonData[headers[i]].SingleHandReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            for(let k = 0; k < jsonData[headers[i]].SingleHandReactionData[0].SingleHandReactionData.length; k++) {
                dumyJson[`Single Hand Reaction Level ${k+1}`] = jsonData[headers[i]].SingleHandReactionData[0]["SingleHandReactionData"][k]["Reaction Time"];
            }
            dumyJson["Single Hand Reaction Hand"] = jsonData[headers[i]].SingleHandReactionData[0]["Hand"];
            dumyJson["Single Hand Reaction Taken at"] = jsonData[headers[i]].SingleHandReactionData[0]["Taken at"];
        }

        if(jsonData[headers[i]].ColorVisionData) {
            for(let j = 1; j < jsonData[headers[i]].ColorVisionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].ColorVisionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    jloopdata["Color Vision Total Correct"] = jsonData[headers[i]].ColorVisionData[j]["total_correct"];
                    jloopdata["Color Vision Incorrect Answers"] = jsonData[headers[i]].ColorVisionData[j]["incorrect_answers"];
                    jloopdata["Color Vision Taken at"] = jsonData[headers[i]].ColorVisionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Color Vision Total Correct"] = jsonData[headers[i]].ColorVisionData[0]["total_correct"];
            dumyJson["Color Vision Incorrect Answers"] = jsonData[headers[i]].ColorVisionData[0]["incorrect_answers"];
            dumyJson["Color Vision Taken at"] = jsonData[headers[i]].ColorVisionData[0]["Taken at"];
        }

        if(jsonData[headers[i]].BothLegsReactionData) {
            for(let j = 1; j < jsonData[headers[i]].BothLegsReactionData.length; j++) {
                let jloopdata = {}
                if(jsonData[headers[i]].BothLegsReactionData[j]) {
                    jloopdata.Name = jsonData[headers[i]].Name;
                    jloopdata.Age = jsonData[headers[i]].Age;
                    jloopdata.Email = jsonData[headers[i]].Email;
                    for(let k = 0; k < jsonData[headers[i]].BothLegsReactionData[j]["Time Insights"].length; k++) {
                        jloopdata[`Both Legs Reaction Level ${k+1}`] = jsonData[headers[i]].BothLegsReactionData[j]["Time Insights"][k]["Reaction Time"];
                    }
                    jloopdata["Both Legs Reaction Left Leg"] = jsonData[headers[i]].BothLegsReactionData[j]["Left Leg"];
                    jloopdata["Both Legs Reaction Right Leg"] = jsonData[headers[i]].BothLegsReactionData[j]["Right Leg"];
                    jloopdata["Both Legs Reaction Taken at"] = jsonData[headers[i]].BothLegsReactionData[j]["Taken at"];
                }
                convertjson.push(jloopdata);
            }
            dumyJson["Both Legs Reaction Left Leg"] = jsonData[headers[i]].BothLegsReactionData[0]["Left Leg"];
            dumyJson["Both Legs Reaction Right Leg"] = jsonData[headers[i]].BothLegsReactionData[0]["Right Leg"];
            dumyJson["Both Legs Reaction Taken at"] = jsonData[headers[i]].BothLegsReactionData[0]["Taken at"];
        }

        // if(jsonData[headers[i]].BothHandsReactionData) {
        //     for(let j = 1; j < jsonData[headers[i]].BothHandsReactionData.length; j++) {
        //         let jloopdata = {}
        //         if(jsonData[headers[i]].BothHandsReactionData[j]) {
        //             jloopdata.Name = jsonData[headers[i]].Name;
        //             jloopdata.Age = jsonData[headers[i]].Age;
        //             jloopdata.Email = jsonData[headers[i]].Email;
        //             for(let k = 0; k < jsonData[headers[i]].BothHandsReactionData[j]["Time Insights"].length; k++) {
        //                 jloopdata[`Both Hands Reaction Level ${k+1}`] = jsonData[headers[i]].BothHandsReactionData[j]["Time Insights"][k]["Reaction Time"];
        //             }
        //             jloopdata["Both Hands Reaction Left Hand"] = jsonData[headers[i]].BothHandsReactionData[j]["Left Hand"];
        //             jloopdata["Both Hands Reaction Right Hand"] = jsonData[headers[i]].BothHandsReactionData[j]["Right Hand"];
        //             jloopdata["Both Hands Reaction Taken at"] = jsonData[headers[i]].BothHandsReactionData[j]["Taken at"];
        //         }
        //         convertjson.push(jloopdata);
        //     }
        //     dumyJson["Both Hands Reaction Left Hand"] = jsonData[headers[i]].BothHandsReactionData[0]["Left Hand"];
        //     dumyJson["Both Hands Reaction Right Hand"] = jsonData[headers[i]].BothHandsReactionData[0]["Right Hand"];
        //     dumyJson["Both Hands Reaction Taken at"] = jsonData[headers[i]].BothHandsReactionData[0]["Taken at"];
        // }
        convertjson.push(dumyJson);
    }


    
    console.log(jsonData);
    
    // console.log(files);
    

    // for (const file of files) {
    //   if (file.name.endsWith('.json')) {
    //     const text = await file.text();
    //     const json = JSON.parse(text);
    //     allData.push(...(Array.isArray(json) ? json : [json]));
    //   }
    // }

    // const headers = Object.keys(allData[0]);
    // const csvRows = [
    //   headers.join(','),
    //   ...allData.map(row => headers.map(field => `"${row[field]}"`).join(','))
    // ];

    // const csvContent = csvRows.join('\n');
    // const blob = new Blob([csvContent], { type: 'text/csv' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // // a.download = 'uploaded_data.csv';
    // a.click();
    // URL.revokeObjectURL(url);
    console.log(convertjson);
    setData(convertjson);
    
  };

  return (
    <div>
      <input type="file" webkitdirectory="true" multiple onChange={handleFiles} />
      {
        data && (
          <div>
            <h2>Data:</h2>
            {/* <pre>{JSON.stringify(data.a)}</pre> */}
            {
                console.log(data)
            }
            <CsvDownload data={data} filename="data.csv" >
                Download CSV
            </CsvDownload>

            <DownloadJSON data={data} filename="user_data" />
          </div>
        )
      }
    </div>
  );
};

export default FolderUploadToCSV;
