import { SocialMedia } from '~services/api/social-media/social-media.types.ts';

export const mockedAddAccount = vi.fn();

export const mockedAccounts = vi.fn(() => ({
  data: {
    DISCORD_EXAMPLE_ID: [
      {
        avatar: 'https://example.com/image1.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '1',
        socialMediaId: 'DISCORD_EXAMPLE_ID',
        token: 'DISCORD_EXAMPLE_TOKEN_1',
        userName: 'Discord User 1',
        valid: false,
      },
      {
        avatar: 'https://example.com/image3.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '2',
        socialMediaId: 'DISCORD_EXAMPLE_ID',
        token: 'DISCORD_EXAMPLE_TOKEN_2',
        userName: 'Discord User 2',
        valid: false,
      },
      {
        avatar: 'https://example.com/image4.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '3',
        socialMediaId: 'DISCORD_EXAMPLE_ID',
        token: 'DISCORD_EXAMPLE_TOKEN_3',
        userName: 'Discord User 3',
        valid: false,
      },
      {
        avatar: 'https://example.com/image6.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '5',
        socialMediaId: 'DISCORD_EXAMPLE_ID',
        token: 'DISCORD_EXAMPLE_TOKEN_5',
        userName: 'Discord User 5',
        valid: false,
      },
    ],
    TWITTER_EXAMPLE_ID: [
      {
        avatar: 'https://example.com/image2.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '14',
        socialMediaId: 'TWITTER_EXAMPLE_ID',
        token: 'TWITTER_EXAMPLE_TOKEN_14',
        userName: 'Twitter User 14',
        valid: false,
      },
      {
        avatar: 'https://example.com/image2.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '4',
        socialMediaId: 'TWITTER_EXAMPLE_ID',
        token: 'TWITTER_EXAMPLE_TOKEN_4',
        userName: 'Twitter User 4',
        valid: false,
      },
      {
        avatar: 'https://example.com/image2.jpg',
        expiresAt: '',
        generatedAt: '',
        id: '6',
        socialMediaId: 'TWITTER_EXAMPLE_ID',
        token: 'TWITTER_EXAMPLE_TOKEN_6',
        userName: 'Twitter User 6',
        valid: false,
      },
    ],
  },
  error: '',
  loading: false,
}));

export const mockedSocialMedias = vi.fn(
  () =>
    new Map<string, SocialMedia>([
      [
        'DISCORD_EXAMPLE_ID',
        {
          icon: 'discord',
          id: 'DISCORD_EXAMPLE_ID',
          name: 'Discord',
          postModes: [
            {
              id: 'DISCORD_STORY_POSTMODE_ID',
              name: 'TesteStory',
              previewComponent: 'Teste',
              validators: {
                text: {
                  maxLength: 3,
                },
              },
              widgets: [
                {
                  component: 'Teste',
                  icon: 'Teste',
                  name: 'Teste',
                },
              ],
            },
            {
              id: 'DISCORD_REELS_POST_ID',
              name: 'TestePost',
              previewComponent: 'Teste',
              validators: {
                text: {
                  maxLength: 3,
                },
              },
              widgets: [
                {
                  component: 'Teste',
                  icon: 'Teste',
                  name: 'Teste',
                },
              ],
            },
            {
              id: 'DISCORD_REELS_POSTMODE_ID',
              name: 'TesteReels',
              previewComponent: 'Teste',
              validators: {
                text: {
                  maxLength: 3,
                },
              },
              widgets: [
                {
                  component: 'Teste',
                  icon: 'Teste',
                  name: 'Teste',
                },
              ],
            },
          ],
        },
      ],
      [
        'TWITTER_EXAMPLE_ID',
        {
          icon: 'twitter',
          id: 'TWITTER_EXAMPLE_ID',
          name: 'Twitter',
          postModes: [
            {
              id: 'TWITTER_THREAD_POST_ID',
              name: 'TestePost',
              previewComponent: 'Teste',
              validators: {
                text: {
                  maxLength: 3,
                },
              },
              widgets: [
                {
                  component: 'Teste',
                  icon: 'Teste',
                  name: 'Teste',
                },
              ],
            },
            {
              id: 'TWITTER_THREAD_POSTMODE_ID',
              name: 'TesteThread',
              previewComponent: 'Teste',
              validators: {
                text: {
                  maxLength: 3,
                },
              },
              widgets: [
                {
                  component: 'Teste',
                  icon: 'Teste',
                  name: 'Teste',
                },
              ],
            },
          ],
        },
      ],
    ])
);

export const mockedUseSocialMediaStore = {
  useSocialMediaStore: vi.fn(() => ({
    accounts: mockedAccounts(),
    addAccount: mockedAddAccount,
    socialMedias: mockedSocialMedias(),
  })),
};
