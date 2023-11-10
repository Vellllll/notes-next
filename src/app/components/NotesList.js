'use-client'

const NotesList = ({children}) => {
    return (
        <div className="border-black border-2 p-4 mx-4 min-h-[200px] h-min max-h-[400px] overflow-hidden break-words">
            {children}
        </div>
    )
}

export default NotesList
