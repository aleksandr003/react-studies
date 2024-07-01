const list = [
    {
        id: 1,
        title: 'hello',
        minut: 15,
    },
    {
        id: 2,
        title: 'how are you?',
        minut: 8,
    },
    {
        id: 3,
        title: 'what is your name?',
        minut: 12,
    },
]

export function VideoList(){
    return (
        <ul>
        {
            list.map((video) =>{
                return (
                    <li key={video.id}>
                        <p>{video.title}</p>
                        <p>{video.minut}</p>
                        <button>Click!</button>
                    </li>
                )
            })
        }
        </ul>
    )
}