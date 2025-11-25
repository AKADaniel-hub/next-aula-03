'use client'
import { useEffect, useState } from "react"

export default function Contador() {

    // Gestão de Estados
    const [count, setCount] = useState<number>(0)
    const [historico, setHistorico] = useState<number[]>([0])


    //B. efeitos
    useEffect(() => {

        document.title = `${count}`


    }, [count])


    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Contador</h2>
            <p>Contador vai em {count} !</p>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => {
                    const novo = count +1
                    setCount(novo)
                    setHistorico([...historico,novo])
                }}
            >
                Aumentar
            </button>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => setCount(count <= 0 ? count : count - 1)}
            >
                Diminuir
            </button>

            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 mx-2 border border-green-700 rounded"
                onClick={() => setCount(0)}
            >
                Reset
            </button>


            <ul>
                {historico.map((n, i) => (

                    <li key={i}>{n}</li>

                ))}

            </ul>

        </section>
    )
}
