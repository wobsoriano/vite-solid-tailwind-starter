import { Component, For } from 'solid-js';
import { Link } from 'solid-app-router'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
]

const Nav: Component = () => {
  return (
    <nav class="flex justify-center gap-x-5 flex-wrap">
      <For each={links}>
        {({ href, text }) => ( <Link href={href}>{text}</Link> )}
      </For>
    </nav>
  );
};

export default Nav;