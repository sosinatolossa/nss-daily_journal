
import { JournalFormComponent } from "./form/JournalForm.js"

//importing the list component from JournalEntryList
import { EntryListComponent } from "./JournalEntryList.js"

import { getEntries } from "./JournalDataProvider.js"

JournalFormComponent()

//Invoking the the list component
EntryListComponent()

getEntries()
