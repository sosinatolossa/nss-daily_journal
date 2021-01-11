/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { entriesHTML } from "./form/JournalForm.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntries")
const contentTarget = document.querySelector("main")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()

    .then(() => {
        let entries = useJournalEntries()
        render(entries)
    })
}

contentTarget.addEventListener("journalStateChanged", () => {
    EntryListComponent()
})
export const render = () => {
    let entries = useJournalEntries()
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       entryLog.innerHTML += JournalEntryComponent(entry)
         
    }
}