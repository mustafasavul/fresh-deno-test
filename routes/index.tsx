/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Price } from './types.ts';

const url: string = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const handler: Handlers<Price | null> = {
  async GET(_, ctx) {
    const resp = await fetch(url);

    if (resp.status === 200) {
      const price: Price = await resp.json();

      return ctx.render(price);
    }
    return ctx.render(null);
  },
};

export default function Home({ data }: PageProps<Price | null>) {
  if (!data) {
    return <h1>Data is not available </h1>;
  }
  console.log({ data });

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>{data.bpi.USD.rate}</p>
    </div>
  );
}
