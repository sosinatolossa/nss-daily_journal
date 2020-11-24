/*
 *  Purpose: To render a single journal entry as an
 *  HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--id" class="journalEntry">${entry.id}</section>
            <section id="entry--date"  class="journalEntry">${entry.date}
                <input class="edit_botton" type="submit" value="edit">
                <input class="delete_button" type="submit" value="delete">
            </section>
            <section id="entry--concept" class="journalEntry">${entry.concept}</section>
            <section id="entry--description" class="journalEntry">${entry.description}</section>
            <section id="entry--mood" class="journalEntry">${entry.mood}</section>
       
    `
}