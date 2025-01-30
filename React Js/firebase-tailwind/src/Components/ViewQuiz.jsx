import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../config/firebase';
import ViewQuzSingle from './ViewQuzSingle';

export default function ViewQuiz() {

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'quizzess');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            var quizdata = [];
            for (var index in data) {
                quizdata.push(data[index]);
            }

            setQuiz([...quizdata]);
        });
    }, []);

    return (
        <>
            <div className='w-[1400px] mt-6 m-auto'>

                <h2 className="font-semibold text-gray-900 text-center text-3xl p-4">View Quiz</h2>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    S.No.
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Question
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Option 1
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Option 2
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Option 3
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Option 4
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Correct Answer
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (quiz.length > 0)
                                    ?
                                    quiz.map((v,i) => {
                                        return (
                                            <ViewQuzSingle data={v} index={i} key={i}/>
                                        )
                                    })

                                    :
                                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                        <th scope="row" colSpan={7} class="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">
                                            No Record Found !!
                                        </th>
                                    </tr>

                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
