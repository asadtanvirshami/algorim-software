import React from "react";

import ang from "@/assets/images/tech/ang.png";
import react from "@/assets/images/tech/react.png";
import py from "@/assets/images/tech/py.png";
import mgdb from "@/assets/images/tech/mgdb.png";
import node from "@/assets/images/tech/node.png";
import vue from "@/assets/images/tech/vue.png";
import redis from "@/assets/images/tech/redis.png";
import js from "@/assets/images/tech/js.png";
import sql from "@/assets/images/tech/sql.png";
import psql from "@/assets/images/tech/psql.png";
import azure from "@/assets/images/tech/az.png";
import aws from "@/assets/images/tech/aws.png";
import graph from "@/assets/images/tech/graph.png";
import dart from "@/assets/images/tech/dart.png";
import firebase from "@/assets/images/tech/firebase.png";
import tsxc from "@/assets/images/tech/ts.png";
import git from "@/assets/images/tech/git.png";
import wordpress from "@/assets/images/tech/wordpress.png";
import btc from "@/assets/images/tech/blk.png";
import tf from "@/assets/images/tech/tf.png";
import rust from "@/assets/images/tech/rust.png";
import gcp from "@/assets/images/tech/gcp.png";
import go from "@/assets/images/tech/go.png";

import Image from "next/image";

const Tech = () => {
  const techDescriptions = [
    {
      name: "Angular",
      image: ang,
      description:
        "A powerful framework for building dynamic, single-page applications.",
    },
    {
      name: "React",
      image: react,
      description:
        "A popular JavaScript library for creating fast and interactive user interfaces.",
    },
    {
      name: "Python",
      image: py,
      description:
        "A versatile language known for its simplicity and applications in web development, AI, and data science.",
    },
    {
      name: "MongoDB",
      image: mgdb,
      description:
        "A NoSQL database designed for scalability and flexibility with JSON-like documents.",
    },
    {
      name: "Node.js",
      image: node,
      description:
        "A JavaScript runtime for server-side programming, ideal for building scalable applications.",
    },
    {
      name: "Vue.js",
      image: vue,
      description:
        "A progressive JavaScript framework for building intuitive user interfaces.",
    },
    {
      name: "Redis",
      image: redis,
      description:
        "An in-memory data structure store, used as a database, cache, and message broker.",
    },
    {
      name: "JavaScript",
      image: js,
      description:
        "The core programming language of the web, enabling dynamic content and interactivity.",
    },
    {
      name: "SQL",
      image: sql,
      description: "A language for managing and querying relational databases.",
    },
    {
      name: "PostgreSQL",
      image: psql,
      description:
        "An advanced open-source relational database with strong SQL compliance.",
    },
    {
      name: "Azure",
      image: azure,
      description:
        "Microsoft’s cloud platform offering a range of services for app development and data management.",
    },
    {
      name: "AWS",
      image: aws,
      description:
        "Amazon's cloud service platform, providing infrastructure and tools for deploying applications.",
    },
    {
      name: "GraphQL",
      image: graph,
      description:
        "A flexible query language for APIs, allowing efficient data retrieval.",
    },
    {
      name: "GO",
      image: go,
      description:
        "An efficient, statically typed programming language designed for simplicity and performance, ideal for scalable backend systems.",
    },
    {
      name: "Dart",
      image: dart,
      description:
        "A programming language optimized for building fast apps on any platform, commonly used with Flutter.",
    },
    {
      name: "Firebase",
      image: firebase,
      description:
        "Google’s platform for app development with real-time database, authentication, and hosting.",
    },
    {
      name: "TypeScript",
      image: tsxc,
      description:
        "A typed superset of JavaScript that enhances code reliability and scalability.",
    },
    {
      name: "Git",
      image: git,
      description:
        "A version control system for tracking changes in source code during software development.",
    },
    {
      name: "WordPress",
      image: wordpress,
      description:
        "A popular CMS for creating and managing websites easily, with a large plugin ecosystem.",
    },
    {
      name: "Blockchain",
      image: btc,
      description:
        "A decentralized technology for secure and transparent data recording, commonly used in cryptocurrencies.",
    },
    {
      name: "Terraform",
      image: tf,
      description:
        "An open-source tool for provisioning infrastructure as code, supporting multiple cloud providers.",
    },
    {
      name: "Rust",
      image: rust,
      description:
        "A systems programming language focused on safety, concurrency, and performance.",
    },
    {
      name: "Google Cloud Platform",
      image: gcp,
      description:
        "Google’s suite of cloud computing services for deploying and managing applications.",
    },
  ];
  return (
    <div className="flex  flex-col justify-center space-x-2 space-y-5 mt-16 items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center">
        {techDescriptions.map((item) => (
          <div key={item.name} className="bg-card p-4 font-[family-name:var(--font-redhat)]">
            <span className="flex  items-center text-2xl justify-between space-y-3" >
              <h1>{item.name}</h1>
              <Image src={item.image} alt={item.name} className="h-12 w-12 rounded" />
            </span>
            <article>{item.description}</article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
