# Frontend Assignment

## Assignment

This project is a frontend assignment built with React and it is hosted at https://frontend-assignment-saas-labs-kappa.vercel.app/.

According to the assignment, I have created a `TablePagination` component that takes an array of data fetched from an API (link: https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json) and displays it in a paginated table. The table is generic and can be used as a plug-and-play component.

**To run the project locally:**

1. **Clone the repository:** `git clone https://github.com/arpitsharma11/frontend-assignment-saas-labs.git`
2. **Navigate to the project directory:** `cd frontend-assignment-saas-labs`
3. **Install dependencies:**  
   `npm install`
4. **Start the development server:** `npm start`

### Features

- **Generic Table Component:** The `TablePagination` component can be easily reused with different data sets.
- **Pagination:** The table data is paginated for better user experience.
- **Data Fetching:** Data fetching is handled by the parent component, allowing for flexibility and separation of concerns. The fetched data is then passed to the `TablePagination` component as a prop.

### Possible future improvements

- **Sorting:** Add sorting functionality to the table columns.
- **Filtering:** Implement filtering options for the table data.
- **Customizable Styles:** Allow users to customize the table's appearance.
- **Accessibility:** Ensure the table is accessible to users with disabilities.
