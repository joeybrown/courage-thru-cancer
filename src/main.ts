import { Video, videos } from "./video.js";

export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}

function delayedHello(
  name: string,
  delay: number = Delays.Medium,
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}

export async function greeter(name: string): Promise<string> {
  return await delayedHello(name, Delays.Long);
}

// This is a promise just in case we get this from a different source in the future.
export async function getVideos(): Promise<Video[]> {
  return Promise.resolve(videos);
}

export async function initialRender(): Promise<void> {


  const hey = await greeter('Hello');
  console.log(hey);
}

initialRender();
