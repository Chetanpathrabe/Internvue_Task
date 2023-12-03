## Data Conversion Script

This script converts a JSON file containing library data into separate Excel files. It flattens the top-level data into a single Excel file and creates individual Excel files for each section and book.

### Prerequisites

- Node.js installed
- `fs` and `json2xls` packages installed

### Installation

1. Install the required packages using npm:

```
npm install fs json2xls
```

### Usage

1. Save the JSON data file as `data.json` in the same directory as the script.
2. Run the script using node:

```
node index.js
```

### Output

The script will create the following Excel files:

- `output.xlsx`: Contains the flattened top-level data
- `section_1.xlsx`, `section_2.xlsx`, ..., `section_n.xlsx`: Contains data for each section
- `book_1_1.xlsx`, `book_1_2.xlsx`, ..., `book_n_m.xlsx`: Contains data for each book