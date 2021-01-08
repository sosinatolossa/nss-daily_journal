
//importing the list component from JournalEntryList
import { EntryListComponent } from "./JournalEntryList.js"

import { getEntries } from "./JournalDataProvider.js"
//Invoking the the list component
EntryListComponent()

getEntries()