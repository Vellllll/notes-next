'use-client'

const NotesList = ({children}) => {
    return (
        <div className="bg-[#FFCF96] p-4 mx-4 min-h-[200px] h-min max-h-[400px] overflow-hidden break-words rounded-t-md">
            {children}
        </div>
    )
}

export default NotesList
