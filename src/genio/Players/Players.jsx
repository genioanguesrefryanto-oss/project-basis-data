import React from 'react'
import { ArrowRight } from 'lucide-react'
import CardPlayers from './CardPlayers'

const Players = () => {
  return (
    <div>
        <div className="pembungkus py-5 px-12">
            <div className="text awal flex justify-between">
                <p className="font-mono">01 - FIRST TEAM</p> 
            </div>
                <div className="tekskedua">
                <h1 className="text-7xl font-display">THE SQUAD</h1>
            </div>
            <div className="card-wrapper grid grid-cols-3 gap-2.5">
                <CardPlayers />
                <CardPlayers />
                <CardPlayers />
            </div>
            <div className="buton flex items-center justify-center p-5 border-b w-fit mx-auto">
                <button className=" items-center flex justify-center gap-2">
                    VIEW ALL
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Players