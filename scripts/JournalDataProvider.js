/*
 *   Journal data provider for Daily Journal application
 * Holds the raw data about each entry and exports
 functions that other modules can use to filter
 the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/08/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },

    {
        id: 2,
        date: "11/18/2020",
        concept: "HTML & CSS",
        entry: "We talked about how we can tranck our code errors using div tool.",
        mood: "Good"
    },

    {
        id: 3,
        date: "11/19/2020",
        concept: "JavaScript, HTML & CSS",
        entry: "We talked about JavaScript arrays and how they're used and build clean code",
        mood: "In-between"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}