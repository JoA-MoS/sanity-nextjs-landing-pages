export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa031f506a1905b3a3eadab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wenw2omh',
                  apiId: '9242430f-fed6-469c-a311-5b09ffec8ac4'
                },
                {
                  buildHookId: '5fa031f5894fb75f0053bbf6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q9aohcxv',
                  apiId: 'f3a101f2-8d79-49da-b58b-378343fb09ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoA-MoS/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q9aohcxv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
