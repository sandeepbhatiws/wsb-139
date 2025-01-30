import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';
import { toast } from 'react-toastify';

export default function AddQuiz() {

    const formHandler = (event) => {
        event.preventDefault();

        const data = {
            question : event.target.question.value, 
            option_1 : event.target.option_1.value,
            option_2 : event.target.option_2.value,
            option_3 : event.target.option_3.value,
            option_4 : event.target.option_4.value,
            correct_answer : event.target.correct_answer.value,
        }

        const db = getDatabase(app);
        set(ref(db, 'quizzess/' + Date.now()), data);

        toast.success('Quiz add successfully !');
        event.target.reset();

        console.log(data);
    }

    return (
        <>
            <div className='w-[1400px] mt-6 m-auto'>
                <form autoComplete='off' onSubmit={formHandler}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="font-semibold text-gray-900 text-center text-3xl pt-4">Add Quiz</h2>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 p-5">
                                <div className="sm:col-span-3">
                                    <label htmlFor="question" className="block text-sm/6 font-medium text-gray-900">
                                        Question
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="question"
                                            name="question"
                                            type="text"
                                            placeholder='Enter Question'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="option_1" className="block text-sm/6 font-medium text-gray-900">
                                        Option 1
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="option_1"
                                            name="option_1"
                                            type="text"
                                            placeholder='Enter Option 1'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="option_2" className="block text-sm/6 font-medium text-gray-900">
                                        Option 2
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="option_2"
                                            name="option_2"
                                            type="text"
                                            placeholder='Enter Option 2'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="option_3" className="block text-sm/6 font-medium text-gray-900">
                                        Option 3
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="option_3"
                                            name="option_3"
                                            type="text"
                                            placeholder='Enter Option 3'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="option_4" className="block text-sm/6 font-medium text-gray-900">
                                        Option 4
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="option_4"
                                            name="option_4"
                                            type="text"
                                            placeholder='Enter Option 4'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="correct_answer" className="block text-sm/6 font-medium text-gray-900">
                                        Correct Answer
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="correct_answer"
                                            name="correct_answer"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value=''>Select Correct Answer</option>
                                            <option value='1'>Option 1</option>
                                            <option value='2'>Option 2</option>
                                            <option value='3'>Option 3</option>
                                            <option value='4'>Option 4</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-6 flex items-center justify-center gap-x-6">
                        <button type="reset" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Add Quiz
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
