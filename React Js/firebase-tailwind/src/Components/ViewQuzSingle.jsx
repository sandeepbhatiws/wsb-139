import React from 'react'

export default function ViewQuzSingle({data,index}) {

    if(data.correct_answer == 1){
        data.correct_answer = data.option_1;
    } else if(data.correct_answer == 2){
        data.correct_answer = data.option_2;
    } else if(data.correct_answer == 3){
        data.correct_answer = data.option_3;
    } else {
        data.correct_answer = data.option_4;
    }

    return (
        <>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td class="px-6 py-4">
                    {index + 1}
                </td>
                <td class="px-6 py-4">
                    {data.question}
                </td>
                <td class="px-6 py-4">
                    {data.option_1}
                </td>
                <td class="px-6 py-4">
                    {data.option_2}
                </td>
                <td class="px-6 py-4">
                    {data.option_3}
                </td>
                <td class="px-6 py-4">
                    {data.option_4}
                </td>
                <td class="px-6 py-4">
                    {data.correct_answer}
                </td>

            </tr>
        </>
    )
}
