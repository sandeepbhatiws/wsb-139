import React, { useState } from 'react'

export default function ProductLoading() {

    const [loading, setLoading] = useState([1,2,3,4,5,6,7,8]);

  return (
    <>
      <section
        class="mx-auto mt-16 grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
    >
        {/* <!-- 1 --> */}
        {
            loading.map((v,i) => {
                return(
                    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-200 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-200 rounded"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                )  
            })
        }
        
        
    </section>

      
    </>
  )
}
