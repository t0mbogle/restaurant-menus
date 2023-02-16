const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        let newRestaurant = await Restaurant.create({
            name: "Eastern Revive",
            location: "Warrington",
            cuisine: "Indian"
        });

        expect(newRestaurant).toBeInstanceOf(Object)
        expect(newRestaurant.name).toBe("Eastern Revive")
        expect(newRestaurant.location).toBe("Warrington")
        expect(newRestaurant.cuisine).toBe("Indian")
    });

    test('can create a Menu', async () => {
        let newMenu = await Menu.create({
            title: "Dinner Menu"
        })

        expect(newMenu).toBeInstanceOf(Object)
        expect(newMenu.title).toBe("Dinner Menu")
    });

    test('can find Restaurants', async () => {
        let restaurants = seedRestaurant;

        expect(restaurants[0].name).toEqual("AppleBees")
        expect(restaurants[0].location).toEqual("Texas")
        expect(restaurants[0].cuisine).toEqual("FastFood")
    });

    test('can find Menus', async () => {
        let menus = seedMenu;

        expect(menus[0].title).toEqual("Breakfast")
        expect(menus[1].title).toEqual("Lunch")
        expect(menus[2].title).toEqual("Dinner")
    });

    xtest('can delete Restaurants', async () => {
        // TODO - write test
        expect().toEqual()
    });
})