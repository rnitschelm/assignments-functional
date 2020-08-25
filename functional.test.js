const User = require("./functional");

const users = [
  {
    id: 1,
    firstName: "Hendrik",
    lastName: "Onana",
    age: 39,
    favoriteCartoon: "Spons Bob"
  },
  {
    id: 2,
    firstName: "Chantallie",
    lastName: "Bruinsma",
    age: 22,
    favoriteCartoon: "Donald Duck"
  },
  {
    id: 3,
    firstName: "Ronnie",
    lastName: "Van Oranje-Nassau",
    age: 99,
    favoriteCartoon: "Barba Pappa"
  },
  {
    id: 4,
    firstName: "Viola",
    lastName: "De Boer",
    age: 12,
    favoriteCartoon: "Spons Bob"
  },
  {
    id: 5,
    firstName: "Harrie",
    lastName: "Boomsma",
    age: 55,
    favoriteCartoon: "Mickey Mouse"
  },
  {
    id: 6,
    firstName: "Janice",
    lastName: "De Wit",
    age: 74,
    favoriteCartoon: "Dommel"
  }
];
describe("User", () => {
  describe(".ids", () => {
    it("returns the ids", () => {
      expect(User.ids(users)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe(".cartoons", () => {
    xit("returns the cartoons", () => {
      expect(User.cartoons(users)).toEqual([
        "Spons Bob",
        "Donald Duck",
        "Barba Pappa",
        "Spons Bob",
        "Mickey Mouse",
        "Dommel"
      ]);
    });
  });

  describe(".names", () => {
    xit("returns the names", () => {
      expect(User.names(users)).toEqual([
        "Hendrik Onana",
        "Chantallie Bruinsma",
        "Ronnie Van Oranje-Nassau",
        "Viola De Boer",
        "Harrie Boomsma",
        "Janice De Wit"
      ]);
    });
  });

  describe(".cartoonify", () => {
    xit("returns the cartoonified names", () => {
      expect(User.cartoonify(users)).toEqual([
        "Hendrik 'Spons bob' Onana",
        "Chantallie 'Donald Duck' Bruinsma",
        "Ronnie 'Barba Pappa' Van Oranje-Nassau",
        "Viola 'Mickey Mouse' De Boer",
        "Janice 'Dommel' De Wit"
      ]);
    });
  });

  describe(".findMickeyFan", () => {
    xit("returns the mickey fan", () => {
      expect(User.findMickeyFan(users).id).toBe(5);
      expect(User.findMickeyFan(users).favoriteCartoon).toBe("Mickey Mouse");
    });
  });

  describe(".findIndexDonaldFan", () => {
    xit("returns the index of the donald duck fan", () => {
      expect(User.findIndexDonaldFan(users)).toBe(1);
    });
  });

  describe(".filterSponsBobbers", () => {
    xit("returns the spons-bobs fans", () => {
      expect(User.filterSponsBobbers(users)).toEqual([
        {
          id: 1,
          firstName: "Hendrik",
          lastName: "Onana",
          age: 39,
          favoriteCartoon: "Spons Bob"
        },
        {
          id: 4,
          firstName: "Viola",
          lastName: "De Boer",
          age: 12,
          favoriteCartoon: "Spons Bob"
        }
      ]);
    });
  });

  describe(".filterNonSponsBobbers", () => {
    xit("returns all but the spons bob fans", () => {
      expect(User.filterNonSponsBobbers(users)).toEqual([
        {
          id: 2,
          firstName: "Chantallie",
          lastName: "Bruinsma",
          age: 22,
          favoriteCartoon: "Donald Duck"
        },
        {
          id: 3,
          firstName: "Ronnie",
          lastName: "Van Oranje-Nassau",
          age: 99,
          favoriteCartoon: "Barba Pappa"
        },
        {
          id: 5,
          firstName: "Harrie",
          lastName: "Boomsma",
          age: 55,
          favoriteCartoon: "Mickey Mouse"
        },
        {
          id: 6,
          firstName: "Janice",
          lastName: "De Wit",
          age: 74,
          favoriteCartoon: "Dommel"
        }
      ]);
    });
  });
});
