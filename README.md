# Google Replica Project

This project is a replica of Google's search interface, built using React and Vite. It provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and includes some ESLint rules for code quality.

## Features

- **Search Functionality**: Users can perform searches with real-time suggestions.
- **Knowledge Graph Display**: Selected search results are enhanced with a knowledge graph for better context.
- **Responsive Design**: The interface adapts to various screen sizes for an optimal user experience.
- **Data Fetching and Caching**: Utilizes [TanStack Query](https://tanstack.com/query/latest) for efficient data fetching and caching, ensuring fast and reliable search results.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/google-replica.git
   cd google-replica
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**: Navigate to `http://localhost:3000` to see the application in action.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
