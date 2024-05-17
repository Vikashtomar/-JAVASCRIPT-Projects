

const addNote = (text = "")=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
         <div class="tool">
        <i  id="vikas" class="save fa-solid fa-bookmark"></i>
        <i   class="trash  fa-solid fa-trash"></i>
    </div>
    <textarea >${text}
    </textarea>   
    `;
    note.querySelector(".trash").addEventListener("click",
        function(){
            note.remove()
            saveNotes()
        }
    )
    note.querySelector("#vikas").addEventListener("click",

        saveNotes
        )

    main.appendChild(note)
    saveNotes()
}



(
     function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNote) =>{
                addNote(lsNote)
            }
        )
     }
)


// save notes function


const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes)
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
//    console.log(data)

localStorage.setItem("notes", JSON.stringify(data))
}
 
let addBtn = document.querySelector("#addBtn");
 
let main = document.querySelector("#main");

addBtn.addEventListener("click",
    function(){
        addNote()

    }
)