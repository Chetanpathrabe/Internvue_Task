const fs = require('fs');
const json2xls = require('json2xls');

// Read the JSON file
const jsonFilePath = './data.json'; // Specify the correct path to your JSON file
const jsonData = require(jsonFilePath);

// Flatten sections and books
const flattenedData = {
  name: jsonData.name,
  location: jsonData.location,
  isOpen: jsonData.isOpen,
  numberOfSections: jsonData.numberOfSections,
  contact: jsonData.contact,
  popularGenres: jsonData.popularGenres
};

// Converting top-level data to Excel
const xls = json2xls([flattenedData]);

// Specifying the output Excel file path
const excelFilePath = './output.xlsx'; // Specifying the desired output path and file name

// Writing to the Excel file
fs.writeFileSync(excelFilePath, xls, 'binary');

// Adding additional sheets for sections and books
jsonData.sections.forEach((section, index) => {
  const sectionXls = json2xls([section]);
  fs.writeFileSync(`./section_${index + 1}.xlsx`, sectionXls, 'binary');

  section.books.forEach((book, bookIndex) => {
    const bookXls = json2xls([book]);
    fs.writeFileSync(`./book_${index + 1}_${bookIndex + 1}.xlsx`, bookXls, 'binary');
  });
});

console.log(`Conversion successful! Excel files saved at ${excelFilePath}`);