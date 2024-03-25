import { render, screen } from "@testing-library/react";
import { EmptyState } from "../EmptyState";

describe('<EmptyState>', () => {
    it('renders with provided props', () => {
        const imageEmpty = 'empty-image.png';
        const title = 'No Results';
        const description = 'No results found for your search query.';
        const children = <button>Retry</button>;
    
        render(
          <EmptyState
            imageEmpty={imageEmpty}
            title={title}
            description={description}
          >
            {children}
          </EmptyState>
        );
    
        const emptyStateImage = screen.getByAltText(`Image ${title}`);
        const emptyStateTitle = screen.getByText(title);
        const emptyStateDescription = screen.getByText(description);
        const retryButton = screen.getByText('Retry');
    
        expect(emptyStateImage).toBeInTheDocument();
        expect(emptyStateTitle).toBeInTheDocument();
        expect(emptyStateDescription).toBeInTheDocument();
        expect(retryButton).toBeInTheDocument();
      });
    
      it('renders without children', () => {
        const imageEmpty = 'empty-image.png';
        const title = 'No Results';
        const description = 'No results found for your search query.';
    
        render(
          <EmptyState
            imageEmpty={imageEmpty}
            title={title}
            description={description}
          />
        );
    
        const emptyStateImage = screen.getByAltText(`Image ${title}`);
        const emptyStateTitle = screen.getByText(title);
        const emptyStateDescription = screen.getByText(description);
    
        expect(emptyStateImage).toBeInTheDocument();
        expect(emptyStateTitle).toBeInTheDocument();
        expect(emptyStateDescription).toBeInTheDocument();
      });
})