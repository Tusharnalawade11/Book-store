export let categories = [
    {
        "id" : "ct1",
        "name" : "Adventure",
        "description" : "Adventure novels whisk readers off to faraway lands. Unlike fantasy novels, they tend to stay in the real world (although theres often a lot of crossover between these genres). Childrens novels often fall into the adventure category, since theyre designed to spark imaginations."
    },
    {
        "id" : "ct2",
        "name" : "Crime",
        "description" : "From murder mysteries to true crime stories, crime is an enduringly popular genre. It tells terrifying stories of wrongdoing, and the search for justice. This genre can be very lucrative, with many authors becoming household names, such as Agatha Christie, Val McDermid, and Harlan Coben."
    },
    {
        "id" : "ct3",
        "name" : "Fantasy",
        "description" : "Fantasy books are probably the most popular modern book genre. Thanks to series like Harry Potter and Percy Jackson, its particularly popular with young adult readers, although more and more fantasy novels are written for adults (George RR Martin, were looking at you). These stories take readers on a journey beyond the known world, to places conjured in the authors imagination."
    },
    {
        "id" : "ct4",
        "name" : "Biography",
        "description" : "There are millions of real-life stories out there just waiting to be told. Unlike autobiographies and memoirs, which the author writes about themselves, biographies tell the story of someone elses life. These are often famous people  Irving Stones Lust For Life, for example, is a biographical novel about Vincent Van Gogh  but they can also be people you know, or lesser-known individuals of interest."
    },
];

export let books = [
    {
        "id" : "a1",
        "name" : "The Little Prince",
        "author" : "Antoine de Saint-Exupry",
        "category" : "Adventure",
        "description" : "The little prince is a novella written by the French writer, Antoine de Saint-Exupry. The story begins with the narrator Remembering something he drew as a child. As per the narrator, the drawing consisted of an elephant inside the stomach of a snake. However, not of the adults around him understood it and claimed that it was simply a hat. They felt that since the narrator could not draw well, he should try his hand at another hobby. Then, the story comes to the present day.",
        "ageRating" : "10+",
        "price" : 120,
        src : require("../images/littlePrice.jpg")
    },
    {
        "id" : "a2",
        "name" : "The Alchemist",
        "author" : "Paulo Coelho",
        "category" : "Adventure",
        "description" : "The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far differentand far more satisfyingthan he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
        "ageRating" : "10+",
        "price" : 249,
        src : require("../images/alchemist.jpg")
    },
    {
        "id" : "a3",
        "name" : "The Three Musketeers",
        "author" : "Alexandre Dumas",
        "category" : "Adventure",
        "description" : "In this classic by Dumas, a young man named dArtagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis  the Kings most celebrated musketeers  and embarks on a journey of his own.",
        "ageRating" : "10+",
        "price" : 325,
        src : require("../images/threeMusketeers.jpg")
    },
    {
        "id" : "a4",
        "name" : "Heart of Darkness",
        "author" : "Joseph Conrad",
        "category" : "Adventure",
        "description" : "One of the most famous and acclaimed English novels in history happens to be a grim adventure story. This 1899 novella by Joseph Conrad tells the doomed story of Charles Marlow, who wishes to leave behind the civilized world and sail up the Congo in Africa. But he does not encounter what he anticipated in his journey into the metaphorical  and very literal  heart of darkness in the middle of the jungle.",
        "ageRating" : "16+",
        "price" : 530,
        src : require("../images/heartofDarkness.jpg")
    },
    {
        "id" : "c1",
        "name" : "Cast a Cold Eye",
        "author" : "Robbie Morrison",
        "category" : "Crime",
        "description" : "With violence erupting between rival gangs and political tensions rising, for war veterans turned investigators Dreghorn and McDaid, murder on their patch in interwar Glasgow is nothing new. But when a man is left brutally executed on a narrowboat on the citys Forth and Clyde Canal, the pair quickly realise that this isnt a run-of-the-mill killing. Capturing the tension and grit of interwar Glasgow in this thrilling historical mystery, Cast a Cold Eye is the second Dreghorn and McDaid novel by Robbie Morrison, winner of Bloody Scotlands Scottish Crime Debut of the Year.",
        "ageRating" : "16+",
        "price" : 2000,
        src: require('../images/castaColdEye.jpg')
    },
    {
        "id" : "c2",
        "name" : "The Murders at Fleat House",
        "author" : "Lucinda Riley",
        "category" : "Crime",
        "description" : "The sudden death of a pupil in Fleat House at St Stephens  a small private boarding school in deepest Norfolk  is a shocking event that the headmaster is very keen to call a tragic accident. But the local police cannot rule out foul play and the case prompts the return of high-flying Detective Inspector Jazmine Jazz Hunter to the force.  As staff at the school close ranks, the disappearance of another young pupil and the death of an elderly Classics master provide Jazz with important leads, but as snow covers the landscape and another suspect goes missing, Jazz must also confront her personal demons.",
        "ageRating" : "18+",
        "price" : 520,
        src: require('../images/murdersatFleatHouse.jpg')
    },
    {
        "id" : "c3",
        "name" : "Into the Dark",
        "author" : "Fiona Cummins",
        "category" : "Crime",
        "description" : "The kettle is still warm, all the familys phones are charging on the worktop, but the house is deserted. In fifteen-year-old Riva Holdens bedroom, scrawled across the mirror in blood, are three words: Make Them Stop. In a gorgeous Art Deco home looking out to the bay of Midtown-on-Sea, a terrible crime has come to light. An entire family  Piper and Gray and their two teenage children  has vanished. ",
        "ageRating" : "14+",
        "price" : 280,
        src: require('../images/intotheDark.jpg')
    },
    {
        "id" : "c4",
        "name" : "Sixteen Horses",
        "author" : "Greg Buchanan",
        "category" : "Crime",
        "description" : "Near the dying English seaside town of Ilmarsh, local police detective Alec Nichols discovers sixteen horses heads on a farm, each buried with a single eye facing the low winter sun. After forensic veterinarian Cooper Allen travels to the scene, the investigators uncover evidence of a chain of crimes in the community  disappearances, arson and mutilations  all culminating in the reveal of something deadly lurking in the ground. A story of enduring guilt, trauma and punishment, set in a small seaside community the rest of the world has left behind, Sixteen Horses is the debut literary thriller from an extraordinary talent. ",
        "ageRating" : "12+",
        "price" : 235,
        src: require('../images/sixteenhorses.jpg')
    },
    {
        "id" : "f1",
        "name" : "Harry Potter Box Set: The Complete Collection",
        "author" : "JKRowling",
        "category" : "Fantasy",
        "description" : "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
        "ageRating" : "10+",
        "price" : 2435,
        src: require('../images/harrypotter.jpg')
    },
    {
        "id" : "f2",
        "name" : "The Hobbit",
        "author" : "JRR Tolkien",
        "category" : "Fantasy",
        "description" : "The journey through Middle-earth begins here with J.R.R. Tolkien's classic prelude to his Lord of the Rings trilogy.A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible... All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.The New York Times Book Review -In a hole in the ground there lived a hobbit.",
        "ageRating" : "8+",
        "price" : 799,
        src: require("../images/hobbit.jpg")
    },
    {
        "id" : "f3",
        "name" : "The Wheel of Time",
        "author" : "Robert Jordan",
        "category" : "Fantasy",
        "description" : "The Wheel of Time is another super popular and beloved fantasy series. It was actually concluded posthumously by Brandon Sanderson, who helped write books 1214 based on Jordans notes. This bestselling fantasy series begins with The Eye of the World, and it follows Moiraine Damodred as she continues her quest to find the chosen one. This takes her to Emonds Field, where she persuades Rand alThor and his friends to join her fight against The Dark One.",
        "ageRating" : "14+",
        "price" : 390,
        src: require("../images/wheeloftime.jpg")
    },
    {
        "id" : "f4",
        "name" : "She Who Became the Sun",
        "author" : "Shelley Parker-Chan",
        "category" : "Fantasy",
        "description" : "She Who Became the Sun is a wonderful literary fantasy that reimagines the rise of Chinas Ming Dynasty. The story follows a girl who is destined for nothingness while her younger brother is destined for greatness. But her whole life changes when her father is murdered and her brother dies of grief. With them gone, she is desperate to survive. So she takes her brothers name and his fate  and thus becomes the monk Zhu Chongba. At the monastery and later with a rebel group, Zhu learns that she is capable of anything to get what she wants.",
        "ageRating" : "15+",
        "price" : 476,
        src: require("../images/shewhobecamethesun.jpg")
    },
    {
        "id" : "b1",
        "name" : "I Know Why the Caged Bird Sings",
        "author" : "Maya Angelou",
        "category" : "Biography",
        "description" : "I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelous debut memoir is a modern American classic beloved worldwide.",
        "ageRating" : "16+",
        "price" : 270,
        src: require("../images/iknowwhythecagedbirdsings.jpg")
    },
    {
        "id" : "b2",
        "name" : "Steve Jobs",
        "author" : "Walter Isaacson",
        "category" : "Biography",
        "description" : "Based on more than forty interviews with Steve Jobs conducted over two yearsas well as interviews with more than 100 family members, friends, adversaries, competitors, and colleaguesWalter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. Isaacsons portrait touched millions of readers.",
        "ageRating" : "8+",
        "price" : 730,
        src: require("../images/stevejobs.jpg")
    },
    {
        "id" : "b3",
        "name" : "Becoming",
        "author" : "Michelle Obama",
        "category" : "Biography",
        "description" : "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of Americathe first African American to serve in that roleshe helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.",
        "ageRating" : "10+",
        "price" : 443,
        src: require("../images/becoming.jpg")
    },
    {
        "id" : "b4",
        "name" : "Sir C V Raman",
        "author" : "A Krishna Bhatt",
        "category" : "Biography",
        "description" : "This biography by A. Krishna Bhatt gives an intimate account of Nobel Prize winner C. V. Ramans life. Bhatts research reveals how Raman was a jovial person, always curious and a great teacher. The book makes C. V. Raman more human, going beyond the image of a worshipped physicist. Ramans humble beginnings and great achievements are a source of inspiration.",
        "ageRating" : "10+",
        "price" : 130,
        src: require("../images/sircvraman.jpg")
    },
];

