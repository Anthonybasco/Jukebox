const { prisma } = require("./common");
const { faker } = require("@faker-js/faker");

const seed = async () => {
  try {
    const posts = 1 + Math.floor(Math.random() * 10);
    for (let i = 0; i < posts; i++) {
      const response = await prisma.post.create({
        data: {
          title: faker.internet.username(),
          categories: {
            create: [
              { name: faker.book.author() },
              { name: faker.animal.bear() },
              { name: faker.image.avatar() },
            ],
          },
        },
      });
    }
    console.log("tables populated");
  } catch (error) {
    console.error(error);
  }
};

seed();