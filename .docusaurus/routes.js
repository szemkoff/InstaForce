import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AzureSpaceGroup/blog',
    component: ComponentCreator('/AzureSpaceGroup/blog', '22d'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/archive',
    component: ComponentCreator('/AzureSpaceGroup/blog/archive', 'ebd'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/authors',
    component: ComponentCreator('/AzureSpaceGroup/blog/authors', 'da9'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/prototype-designs-implementation-path',
    component: ComponentCreator('/AzureSpaceGroup/blog/prototype-designs-implementation-path', 'f53'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/quantum-propulsion-theoretical-breakthrough',
    component: ComponentCreator('/AzureSpaceGroup/blog/quantum-propulsion-theoretical-breakthrough', '771'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/research-infrastructure-update',
    component: ComponentCreator('/AzureSpaceGroup/blog/research-infrastructure-update', '744'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags', '974'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/blockchain',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/blockchain', '1a6'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/breakthrough',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/breakthrough', 'c8b'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/community',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/community', 'c89'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/design',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/design', '7ea'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/development',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/development', '2ef'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/diagrams',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/diagrams', 'ea2'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/documentation',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/documentation', '32d'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/game-based-research',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/game-based-research', 'b07'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/implementation',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/implementation', 'a9d'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/infrastructure',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/infrastructure', 'dd7'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/propulsion',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/propulsion', '53c'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/prototypes',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/prototypes', '792'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/qpds',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/qpds', '7fa'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/quantum',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/quantum', 'aae'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/quantum-navigation',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/quantum-navigation', '76b'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/research',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/research', 'feb'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/tokenization',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/tokenization', '12a'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/updates',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/updates', '08f'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tags/website',
    component: ComponentCreator('/AzureSpaceGroup/blog/tags/website', 'e55'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/tokenization-and-game-research',
    component: ComponentCreator('/AzureSpaceGroup/blog/tokenization-and-game-research', '442'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/blog/website-design-enhancement',
    component: ComponentCreator('/AzureSpaceGroup/blog/website-design-enhancement', '923'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/project-status',
    component: ComponentCreator('/AzureSpaceGroup/project-status', 'e71'),
    exact: true
  },
  {
    path: '/AzureSpaceGroup/docs',
    component: ComponentCreator('/AzureSpaceGroup/docs', '801'),
    routes: [
      {
        path: '/AzureSpaceGroup/docs',
        component: ComponentCreator('/AzureSpaceGroup/docs', 'c2e'),
        routes: [
          {
            path: '/AzureSpaceGroup/docs',
            component: ComponentCreator('/AzureSpaceGroup/docs', '66c'),
            routes: [
              {
                path: '/AzureSpaceGroup/docs/about',
                component: ComponentCreator('/AzureSpaceGroup/docs/about', '56c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/careers',
                component: ComponentCreator('/AzureSpaceGroup/docs/careers', '4f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/contributing',
                component: ComponentCreator('/AzureSpaceGroup/docs/contributing', 'b66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/core-documentation/communication-systems',
                component: ComponentCreator('/AzureSpaceGroup/docs/core-documentation/communication-systems', '80b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/core-documentation/core-technology',
                component: ComponentCreator('/AzureSpaceGroup/docs/core-documentation/core-technology', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/core-documentation/energy-systems',
                component: ComponentCreator('/AzureSpaceGroup/docs/core-documentation/energy-systems', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/core-documentation/propulsion-navigation',
                component: ComponentCreator('/AzureSpaceGroup/docs/core-documentation/propulsion-navigation', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/core-documentation/quantum-position-determination',
                component: ComponentCreator('/AzureSpaceGroup/docs/core-documentation/quantum-position-determination', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/diagrams',
                component: ComponentCreator('/AzureSpaceGroup/docs/diagrams', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/infrastructure-documentation/bio-resonance-habitat',
                component: ComponentCreator('/AzureSpaceGroup/docs/infrastructure-documentation/bio-resonance-habitat', 'c54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/infrastructure-documentation/human-centric-design',
                component: ComponentCreator('/AzureSpaceGroup/docs/infrastructure-documentation/human-centric-design', '2e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/infrastructure-documentation/support-systems',
                component: ComponentCreator('/AzureSpaceGroup/docs/infrastructure-documentation/support-systems', '8c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/intro',
                component: ComponentCreator('/AzureSpaceGroup/docs/intro', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/investment',
                component: ComponentCreator('/AzureSpaceGroup/docs/investment', '869'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/pitch-deck',
                component: ComponentCreator('/AzureSpaceGroup/docs/pitch-deck', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/rebranding-plan',
                component: ComponentCreator('/AzureSpaceGroup/docs/rebranding-plan', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/advanced-materials-research',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/advanced-materials-research', 'b3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/game-based-research-platform',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/game-based-research-platform', '67f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/legal-regulatory',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/legal-regulatory', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/prototype-designs',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/prototype-designs', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/quantum-battery-prototype',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/quantum-battery-prototype', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/quantum-communications',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/quantum-communications', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/quantum-propulsion-theoretical-revision',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/quantum-propulsion-theoretical-revision', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/quantum-research-paper',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/quantum-research-paper', 'b80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/research-development',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/research-development', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/research-documentation/time-tacking',
                component: ComponentCreator('/AzureSpaceGroup/docs/research-documentation/time-tacking', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AzureSpaceGroup/docs/tokenization-strategy',
                component: ComponentCreator('/AzureSpaceGroup/docs/tokenization-strategy', 'ccf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/AzureSpaceGroup/',
    component: ComponentCreator('/AzureSpaceGroup/', '1bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
