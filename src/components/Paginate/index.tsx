import { useState } from 'react'
import { useRouter } from 'next/router';
import { HiOutlineChevronLeft,
         HiOutlineChevronDoubleLeft, 
         HiOutlineChevronRight, 
         HiOutlineChevronDoubleRight 
        } from "react-icons/hi";

export function Paginate(){
  const [page, setPage] = useState(1)
  const router = useRouter()
  const actualPage = router.query

  console.log(actualPage)
  
  function handleChangePage(id: number){
    if(id === 1){
      setPage(1)
      router.push('/home')
    }
    else if(id === 2){
      setPage( page > 1 ? page - 1 : page)
      if(page !== 1 ){
        router.push(`/page/${page >= 1 ? page - 1 : page}`)
      }
    }
    else if(id === 3){
      setPage(page < 10 ? page + 1 : page)
      if(page !== 10){
        router.push(`/page/${page <= 10 ? page + 1 : page}`)
      }
    }
    else{
      setPage(10)
      router.push(`/page/${10}`)
    }

  }
  return(
    <div className="w-[20rem] flex items-center justify-around mt-4">
      <div>
        <button onClick={() => handleChangePage(1)}>
          <HiOutlineChevronDoubleLeft color="#fff" size={20}/>
        </button>

        <button onClick={() => handleChangePage(2)}>
          <HiOutlineChevronLeft color="#fff" size={20}/>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xl text-bronze font-bold">{actualPage.page ? actualPage.page : 1}</span>

      </div>
      <div>
        <button onClick={() => handleChangePage(3) }>
          <HiOutlineChevronRight color="#fff" size={20}/>
        </button>
          
        <button onClick={() => handleChangePage(4)}>
          <HiOutlineChevronDoubleRight color="#fff" size={20}/>
        </button>
      </div>
    </div>
  )
}