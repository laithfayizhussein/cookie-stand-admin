import React, { useState} from 'react';
import "tailwindcss/tailwind.css"
import {workingHours} from '../data' 

export default function CookieStandForm(props) {
        const [location,setLocation] =useState("");
        const [min,setMin] =useState("");
        const [max,setMax] =useState("");
        const [Avg,setAvg] =useState("");
        const [report,setReport] =useState("");
        const [randomMethod,setrandomMethod] =useState("")

        function handlerLocation(event){
            setLocation(event.target.value);
        }
        function handlerMinimum(event){
            setMin(event.target.value);
        }
        function handlerMaximum(event){
            setMax(event.target.value);
        }
        function handlerAvg(event){
            setAvg(event.target.value);
        }

        function onCreate(event){
            event.preventDefault();
            const result =[]
            const data ={
                id:report.length +1,
                location:location,
                cookies:[]   
            }
                //function getRandomInt(min, max) {
                   // min = Math.ceil(min);
                   // max = Math.floor(max);
                    //return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                   // }
           
            for (let i = 0; i < 14; i++){
                    const randomMethod = Math.floor(Math.random() * ((parseInt(max) - parseInt(min) + 1) ) + parseInt(min))
                
                data.cookies.push(randomMethod)
                for(let j = 0; j < report.length+1; j++){
                    randomMethod += report[j] ? report[j].cookies[i] : 0
                }
                result.push(randomMethod)
            }
            setReport(
                [...report,data]
            )
            setrandomMethod(
                result
            )
            props.setLocated(
                report.length + 1
            )
        }

    return (
        <main className="grid w-full px-0 text-center bg-green-100 p-11 justify-items-stretch">
        <form className="py-5 mx-12 bg-green-300 rounded px-11 w-4/5justify-self-center" onSubmit={onCreate}>
            <fieldset>
                <div className="flex flex-col ...">
                    <div className="p-5 text-2xl">
                             <h2 >Create Cookie Stand</h2>
                    </div>

                    <div>
                        <div className="container mx-auto w-11/12 my-1.5" >
                            <label className="mr-8 ..." >location</label>
                            <input onChange={handlerLocation} className="w-4/5" type="text" name="location" />
                        </div>
                    </div>
                    <div className="container mx-auto w-11/12 my-1.5" >
                        <div className="flex space-x-6 ...">
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label >Minimum Customers per Hour</label>
                                    <input onChange={handlerMinimum} type="number" name="min" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label >Maximum Customers per Hour</label>
                                    <input onChange={ handlerMaximum} type="number" name="max" />
                                </div>
                                <div className="flex flex-col ... w-1/4 text-xs text-center bg-green-100 p-2 rounded-lg">
                                    <label >Average Cookies per Sale</label>
                                    <input onChange={handlerAvg} type="number" step="0.01" name="avg" />
                                </div>
                                <button className="w-1/4 bg-green-500 rounded-lg">Create</button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>

       <div className="flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5">
                {(report.length == 0) ? 
                <h2>No Cookie Stands Available</h2> :
                <table className="border border-collapse border-gray-800 rounded-lg">
                    <thead className="bg-green-500">
                        <tr key="1">
                                <th>
                                    Location
                                </th>
                                {workingHours.map
                                (hour => (<th>{hour}</th>))
                                }
                                <th>
                                    Totals
                                </th>
                            </tr>
                    </thead>
                    <tbody className="border border-collapse border-gray-800">
                        {report.map(data => (
                            <tr className="border border-collapse border-gray-800" key={data.id}>
                                <td className="border border-collapse border-gray-800">{data.location}</td>
                                {data.cookies.map(cookie => (<td className="border border-collapse border-gray-800">{cookie}</td>))}
                                <td className="border border-collapse border-gray-800">{data.cookies.reduce((sum, curr) => {sum = sum+curr; return sum},0)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-green-500 border border-collapse border-gray-800">
                            <tr className="border border-collapse border-gray-800" key={report.length + 1}>
                                <th className="border border-collapse border-gray-800">Totals</th>
                                {randomMethod.map(randomMethod => (<th className="border border-collapse border-gray-800">{randomMethod}</th>))}
                                <th className="border border-collapse border-gray-800">{randomMethod.reduce((sum, curr) => {sum = sum+curr; return sum},0)}</th>
                            </tr>
                    </tfoot>
                </table>
                   }  
            </div>
        </main>
    )
}   