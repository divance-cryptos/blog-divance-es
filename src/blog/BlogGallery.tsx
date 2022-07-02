import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const format = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'UTC',
  });
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {props.posts.map((elt) => (
        <Link key={elt.slug} href="/posts/[slug]" as={`/posts/${elt.slug}`}>
          <div className="rounded overflow-hidden shadow-lg">
            <Image
              className="w-full"
              src={require(`../assets/${elt.image}`)}
              alt="Mountain"
              objectFit="contain"
            />
            <div className="px-6 py-4 bg-white">
              <div className="font-bold text-xl mb-2">{elt.title}</div>
              <p className="text-gray-700 text-base">{elt.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-white">
              {format(new Date(elt.date))}
            </div>
          </div>
        </Link>
      ))}
    </div>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
