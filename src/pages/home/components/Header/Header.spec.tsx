import { render, screen } from '@testing-library/react';
import { SOCIAL_MEDIAS } from '~/constants/social-medias';

import Header from './Header';

describe('Header component', () => {
  describe('show the content on screen', () => {
    it('renders its content', () => {
      render(<Header />);

      const octopostLogo = screen.getByLabelText('octopost logo');
      const tiktokIcon = screen.getByLabelText('tiktok icon');
      const twitterIcon = screen.getByLabelText('twitter icon');
      const instagramIcon = screen.getByLabelText('instagram icon');

      expect(octopostLogo).toBeInTheDocument();
      expect(tiktokIcon).toBeInTheDocument();
      expect(twitterIcon).toBeInTheDocument();
      expect(instagramIcon).toBeInTheDocument();
    });
    it('ensures social media links are correct', () => {
      render(<Header />);

      const homeLink = screen.getByLabelText('octopost logo');
      const tiktokLink = screen.getByLabelText('tiktok icon');
      const twitterLink = screen.getByLabelText('twitter icon');
      const instagramLink = screen.getByLabelText('instagram icon');

      expect(homeLink.getAttribute('href')).toBe('/');
      expect(tiktokLink.getAttribute('href')).toBe(SOCIAL_MEDIAS.TIKTOK);
      expect(twitterLink.getAttribute('href')).toBe(SOCIAL_MEDIAS.TWITTER);
      expect(instagramLink.getAttribute('href')).toBe(SOCIAL_MEDIAS.INSTAGRAM);
    });
  });
});
