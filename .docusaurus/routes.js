import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/InstaForce/blog',
    component: ComponentCreator('/InstaForce/blog', '71d'),
    exact: true
  },
  {
    path: '/InstaForce/blog/archive',
    component: ComponentCreator('/InstaForce/blog/archive', 'e6e'),
    exact: true
  },
  {
    path: '/InstaForce/blog/authors',
    component: ComponentCreator('/InstaForce/blog/authors', '07c'),
    exact: true
  },
  {
    path: '/InstaForce/blog/docusaurus-configuration-update',
    component: ComponentCreator('/InstaForce/blog/docusaurus-configuration-update', 'c8f'),
    exact: true
  },
  {
    path: '/InstaForce/blog/research-infrastructure-update',
    component: ComponentCreator('/InstaForce/blog/research-infrastructure-update', 'a1f'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags',
    component: ComponentCreator('/InstaForce/blog/tags', 'b3e'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags/diagrams',
    component: ComponentCreator('/InstaForce/blog/tags/diagrams', '72e'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags/documentation',
    component: ComponentCreator('/InstaForce/blog/tags/documentation', '1eb'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags/infrastructure',
    component: ComponentCreator('/InstaForce/blog/tags/infrastructure', 'dd4'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags/research',
    component: ComponentCreator('/InstaForce/blog/tags/research', '336'),
    exact: true
  },
  {
    path: '/InstaForce/blog/tags/update',
    component: ComponentCreator('/InstaForce/blog/tags/update', '2b4'),
    exact: true
  },
  {
    path: '/InstaForce/project-status',
    component: ComponentCreator('/InstaForce/project-status', 'f7c'),
    exact: true
  },
  {
    path: '/InstaForce/docs',
    component: ComponentCreator('/InstaForce/docs', 'ac1'),
    routes: [
      {
        path: '/InstaForce/docs',
        component: ComponentCreator('/InstaForce/docs', '2bb'),
        routes: [
          {
            path: '/InstaForce/docs',
            component: ComponentCreator('/InstaForce/docs', '62d'),
            routes: [
              {
                path: '/InstaForce/docs/contributing',
                component: ComponentCreator('/InstaForce/docs/contributing', '433'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/core-documentation/communication-systems',
                component: ComponentCreator('/InstaForce/docs/core-documentation/communication-systems', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/core-documentation/core-technology',
                component: ComponentCreator('/InstaForce/docs/core-documentation/core-technology', '460'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/core-documentation/energy-systems',
                component: ComponentCreator('/InstaForce/docs/core-documentation/energy-systems', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/core-documentation/propulsion-navigation',
                component: ComponentCreator('/InstaForce/docs/core-documentation/propulsion-navigation', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/core-documentation/quantum-position-determination',
                component: ComponentCreator('/InstaForce/docs/core-documentation/quantum-position-determination', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/diagrams',
                component: ComponentCreator('/InstaForce/docs/diagrams', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/infrastructure-documentation/bio-resonance-habitat',
                component: ComponentCreator('/InstaForce/docs/infrastructure-documentation/bio-resonance-habitat', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/infrastructure-documentation/human-centric-design',
                component: ComponentCreator('/InstaForce/docs/infrastructure-documentation/human-centric-design', '0fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/infrastructure-documentation/support-systems',
                component: ComponentCreator('/InstaForce/docs/infrastructure-documentation/support-systems', '161'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/intro',
                component: ComponentCreator('/InstaForce/docs/intro', 'afe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/investment',
                component: ComponentCreator('/InstaForce/docs/investment', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/pitch-deck',
                component: ComponentCreator('/InstaForce/docs/pitch-deck', '0db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/advanced-materials-research',
                component: ComponentCreator('/InstaForce/docs/research-documentation/advanced-materials-research', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/legal-regulatory',
                component: ComponentCreator('/InstaForce/docs/research-documentation/legal-regulatory', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/quantum-communications',
                component: ComponentCreator('/InstaForce/docs/research-documentation/quantum-communications', 'b56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/quantum-research-paper',
                component: ComponentCreator('/InstaForce/docs/research-documentation/quantum-research-paper', '0c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/research-development',
                component: ComponentCreator('/InstaForce/docs/research-documentation/research-development', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/InstaForce/docs/research-documentation/time-tacking',
                component: ComponentCreator('/InstaForce/docs/research-documentation/time-tacking', '3b4'),
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
    path: '/InstaForce/',
    component: ComponentCreator('/InstaForce/', '98d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
