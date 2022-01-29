const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const notion = () =>( [
    {title:'Mushroom foraging in North Carolina When its cold and snowy out', text: text.slice(0,350), url: '/shop', image: 'https://images.pexels.com/photos/5331074/pexels-photo-5331074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}, 
    {title:'post2', text: text.slice(0,350), image: 'https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}, 
    {title:'post3', text: text.slice(0,350), url: 'www.youtube.com'}, 
    {title:'post4', text: text.slice(0,350)},
    {title:'post5', text: text.slice(0,350)}
]);
export const navList = [ 
{id: 'blog', url: '/'},{id: 'shop', url: '/shop'},
{id: 'cart', url: '/cart'},{id: 'contact', url: '/contact'}]

export default notion;