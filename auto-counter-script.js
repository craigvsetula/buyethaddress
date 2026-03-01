// AUTO-COUNTER SCRIPT
// This script automatically calculates category counts from your domain data
// Add this AFTER loading domains-data.js and BEFORE your card generation code

// Function to auto-calculate all category counts
function calculateCategoryCounts() {
  // Initialize all counts to 0
  for (let mainCat in subcategories) {
    for (let subCat in subcategories[mainCat]) {
      subcategories[mainCat][subCat].count = 0;
    }
  }
  
  // Count domains in each category
  for (let domain in domainData) {
    const categories = domainData[domain].categories;
    
    categories.forEach(categoryCode => {
      // Extract main category (first character) and subcategory (full code)
      const mainCat = categoryCode.charAt(0);
      const subCat = categoryCode;
      
      // Increment the count
      if (subcategories[mainCat] && subcategories[mainCat][subCat]) {
        subcategories[mainCat][subCat].count++;
      }
    });
  }
  
  console.log('Category counts auto-calculated!');
}

// Run the auto-counter immediately
calculateCategoryCounts();
