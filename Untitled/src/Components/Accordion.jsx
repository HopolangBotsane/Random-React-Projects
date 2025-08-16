import { useState } from "react"

function Accordion() {

    const data = [
        {
            id: 1,
            question: "First: Li Europan lingues es membres del sam familie.",
            answer: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
        },
        {
            id: 2,
            question: "Second: Li Europan lingues es membres del sam familie.",
            answer: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
        },
        {
            id: 3,
            question: "Third: Li Europan lingues es membres del sam familie.",
            answer: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
        },
        {
            id: 4,
            question: "Forth: Li Europan lingues es membres del sam familie.",
            answer: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro"
        }
    ]

    const [selected, setSelected] = useState()

    function handleSelection(getCurrentId) {
        setSelected(getCurrentId)
    }

    function handleOnDoubleClick() {
        setSelected(null)
    }

    return(
        <div className="wrapper">
            {data.map((dataitem) => (
                <div className="accordion">
                    <div onClick={() => handleSelection(dataitem.id)} onDoubleClick={handleOnDoubleClick} className="title">
                        <h2>{dataitem.question}</h2>
                        <span>+</span>
                    </div>
                    {
                        selected === dataitem.id ?
                        <div className="answer">{dataitem.answer}</div> :
                        null
                    }

                </div>
            ))}
        </div>
    )

}

export default Accordion