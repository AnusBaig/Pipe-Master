/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/',
    name: 'Dashboard',
    tag: '2',
    tagColor: 'warning',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    header: 'Pages',
    icon: 'PackageIcon',
    i18n: 'Pages',
    items: [
      {
        url: '/material',
        name: 'Material',
        slug: 'email',
        icon: 'LayersIcon',
        i18n: 'Material'
      },
      {
        url: '/requirement',
        name: 'Requirement',
        slug: 'email',
        icon: 'LayoutIcon',
        i18n: 'Requirement'
      },
      {
        url: '/result',
        name: 'Results',
        icon: 'PackageIcon',
        i18n: 'Results',
      }
    ]
  },
  {
    header: 'User',
    icon: 'FileIcon',
    i18n: 'User',
    items: [
      {
        url: '/pages/profile',
        slug: 'page-profile',
        name: 'Profile',
        icon: 'UserIcon',
        i18n: 'Profile'
      },
      {
        url: '/pages/user-settings',
        slug: 'page-user-settings',
        name: 'User Settings',
        icon: 'SettingsIcon',
        i18n: 'UserSettings'
      },
      {
        url: null,
        name: 'Authentication',
        icon: 'PieChartIcon',
        i18n: 'Authentication',
        submenu: [
          {
            url: '/pages/login',
            name: 'Login',
            slug: 'pages-login',
            i18n: 'Login',
            target: '_blank'
          },
          {
            url: '/pages/register',
            name: 'Register',
            slug: 'pages-register',
            i18n: 'Register',
            target: '_blank'
          },
          {
            url: '/pages/forgot-password',
            name: 'Forgot Password',
            slug: 'pages-forgot-password',
            i18n: 'ForgotPassword',
            target: '_blank'
          },
          {
            url: '/pages/reset-password',
            name: 'Reset Password',
            slug: 'pages-reset-password',
            i18n: 'ResetPassword',
            target: '_blank'
          },
          {
            url: '/pages/lock-screen',
            name: 'Lock Screen',
            slug: 'pages-lock-screen',
            i18n: 'LockScreen',
            target: '_blank'
          }
        ]
      },
    ]
  }
]

