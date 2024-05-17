



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
)()


let addBtn = document.querySelector("#addBtn");
 
let main = document.querySelector("#main");

addBtn.addEventListener("click",
    function(){
        addNote()

    }
)