import { BusSchedule } from "./Types/BusSchedule";
import { Faculty } from "./Types/Faculty";
import { Location } from "./Types/Location";
import { Student } from "./Types/Student";
import { AcademicStaff } from "./Types/AcademicStaff";
import { User } from "./Types/User";
import { AdministriveStaff } from "./Types/AdministriveStaff";
import { Course } from "./Types/Course";
import { Class } from "./Types/Class";
import { LectureHall } from "./Types/LectureHall";
import { Group } from "./Types/Group";

// export const fakeStudent: Student = {
//   userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
//   firstName: "Rilind",
//   lastName: "Bicaj",
//   parentName: "Sadik Bicaj",
//   role: "STUDENT",
//   city: "Istog",
//   address: "Vrellë e Istogut, Rruga Tedeli, nr. 5",
//   birthday: "22 Dhjetor, 2000",
//   country: "Kosovë",
//   zipCode: "30000",
//   age: "21",
//   personalNumber: "144156821",
//   telephone: "+383 45 994 307",
//   email: "rb47139@ubt-uni.net",
//   gender: "Mashkull",
//   profilePictureUrl:
//     "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
//   studentId: "192047139",
//   generation: {
//     generationId: 1,
//     name: "19/20",
//   },
//   groups: [
//     {
//       groupId: 1,
//       groupName: "G3a - SHKI BSc.",
//       timeSlot: "Pasdite",
//     },
//     {
//       groupId: 7,
//       groupName: "G6b - ARK BSc.",
//       timeSlot: "Pasdite",
//     },
//   ],
//   specializations: [
//     {
//       specializationId: 3,
//       specializationName: "Përgjithshëm",
//     },
//     {
//       specializationId: 4,
//       specializationName: "Software Systems Engineering",
//     },
//   ],
// };

// export const fakeAdmin: User = {
//   userId: "fbfc92f7-0c3c-42dc-96fc-c6bdf4e98933",
//   firstName: "Filan",
//   lastName: "Fisteku",
//   role: "ADMINISTRATIVESTAFF",
//   parentName: "Avdet Fisteku",
//   city: "Gjakovë",
//   address: "Rruga Teuta, C3H1, nr. 10",
//   birthday: "13 Shkurt, 1988",
//   country: "Kosovë",
//   zipCode: "23000",
//   age: "54",
//   personalNumber: "109311231",
//   telephone: "+383 44 112 808",
//   email: "ffadmn@ubt-uni.net",
//   gender: "Mashkull",
//   profilePictureUrl:
//     "https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529195603042-9ITIYY4D1VS00NETN01Q/image-asset.jpeg",
// };

// export const fakeFaculty: Faculty = {
//   facultyID: 1,
//   facultyName: "Shkenca Kompjuterike dhe Inxhinieri - Bachelors",
// };

// export const FakeSchedules: BusSchedule[] = [
//   {
//     busScheduleId: 1,
//     locationName: "Prishtinë",
//     departingPlace: "Rrethi me Flamur",
//     departingPlaceURL: "sdfdsfs",
//     slots: [
//       {
//         slotId: "1",
//         departTime: "09:00",
//         arrivalTime: "09:30",
//       },
//       {
//         slotId: "2",
//         departTime: "12:30",
//         arrivalTime: "13:00",
//       },
//       {
//         slotId: "3",
//         departTime: "15:10",
//         arrivalTime: "15:40",
//       },
//     ],
//   },
//   {
//     locationId: 2,
//     locationName: "Gjilan",
//     departingPlace: "Komuna e Gjilanit",
//     departingPlaceURL: "sdfdsfs",
//     slots: [
//       {
//         slotId: "1",
//         departTime: "08:00",
//         arrivalTime: "08:30",
//       },
//       {
//         slotId: "2",
//         departTime: "11:30",
//         arrivalTime: "12:00",
//       },
//       {
//         slotId: "3",
//         departTime: "14:10",
//         arrivalTime: "14:40",
//       },
//     ],
//   },
// ];

// export const fakeLocations: Location[] = [
//   {
//     locationId: 1,
//     locationName: "Prishtinë",
//   },
//   {
//     locationId: 2,
//     locationName: "Gjilan",
//   },
//   {
//     locationId: 3,
//     locationName: "Gjakovë",
//   },
//   {
//     locationId: 4,
//     locationName: "Istog",
//   },
// ];

export const fakeStudent: Student = {
  id: "b031f706-5ee5-4322-8003-37fe136bf4cf",
  firstName: "Rilind",
  surname: "Bicaj",
  parentName: "Sadik Bicaj",
  dateRegistered: "",
  roleName: "STUDENT",
  city: {
    cityId: "1",
    cityName: "Istog",
    cityCategory: "dsfs",
    zipCode: "30000",
  },
  addressDetails: "Vrellë e Istogut, Rruga Tedeli, nr. 5",
  dateOfBirth: "22 Dhjetor, 2000",
  country: {
    countryId: "1",
    countryName: "Kosovë",
  },
  age: "21",
  personalNumber: "144156821",
  phoneNumber: "+383 45 994 307",
  email: "rb47139@ubt-uni.net",
  gender: "Mashkull",
  profilePictureURL:
    "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
  studentId: "192047139",
  generation: {
    generationId: 1,
    name: "19/20",
  },
  groups: [
    {
      groupId: "1",
      groupName: "G3a - SHKI BSc.",
      timeSlot: "Pasdite",
      classes: [
        {
          classId: 14,
          startingTime: "17:40",
          endingTime: "19:10",
          lectureHall: {
            lectureHallId: "17",
            lectureHallName: "A007",
            capacity: "120",
            locationi: "Kati i pare",
          },
          course: {
            courseId: "B14",
            courseCode: "433",
            courseName: "LAB 2",
            ects: "7",
            academicStaff: [
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit2",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
            ],
            semester: {
              semesterID: 1,
              semesterName: "Semestri i trete",
            },
            specializations: {
              specializationId: 1,
              specializationName: "WEB",
            },
            courseCategory: {
              categoryId: 1,
              categoryName: "Obligative",
            },
          },
        },
        {
          classId: 14,
          startingTime: "17:40",
          endingTime: "19:10",
          lectureHall: {
            lectureHallId: "17",
            lectureHallName: "A007",
            capacity: "120",
            locationi: "Kati i pare",
          },
          course: {
            courseId: "B14",
            courseCode: "433",
            courseName: "LAB 2",
            ects: "7",
            academicStaff: [
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit2",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
            ],
            semester: {
              semesterID: 1,
              semesterName: "Semestri i trete",
            },
            specializations: {
              specializationId: 1,
              specializationName: "WEB",
            },
            courseCategory: {
              categoryId: 1,
              categoryName: "Obligative",
            },
          },
        },
      ],
    },
    {
      groupId: "7",
      groupName: "G6b - ARK BSc.",
      timeSlot: "Pasdite",
      classes: [
        {
          classId: 14,
          startingTime: "17:40",
          endingTime: "19:10",
          lectureHall: {
            lectureHallId: "17",
            lectureHallName: "A007",
            capacity: "120",
            locationi: "Kati i pare",
          },
          course: {
            courseId: "B14",
            courseCode: "433",
            courseName: "LAB 2",
            ects: "7",
            academicStaff: [
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit2",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
            ],
            semester: {
              semesterID: 1,
              semesterName: "Semestri i trete",
            },
            specializations: {
              specializationId: 1,
              specializationName: "WEB",
            },
            courseCategory: {
              categoryId: 1,
              categoryName: "Obligative",
            },
          },
        },
        {
          classId: 14,
          startingTime: "17:40",
          endingTime: "19:10",
          lectureHall: {
            lectureHallId: "17",
            lectureHallName: "A007",
            capacity: "120",
            locationi: "Kati i pare",
          },
          course: {
            courseId: "B14",
            courseCode: "433",
            courseName: "LAB 2",
            ects: "7",
            academicStaff: [
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
              {
                userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
                firstName: "Endrit2",
                lastName: "Makolli",
                parentName: "Sami Makolli",
                role: "STUDENT",
                city: "Prishtine",
                address: "Azem Jashanica 3",
                birthday: "13 korrik, 2001",
                country: "Kosovë",
                zipCode: "10000",
                age: "20",
                personalNumber: "--------",
                telephone: "+383 44 991 014",
                email: "em47593@ubt-uni.net",
                gender: "Mashkull",
                profilePictureUrl:
                  "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
                academicStaffId: "192047593",
                academicLevels: [
                  {
                    academicLevelId: 1,
                    academicLevelName: "G3a - SHKI BSc.",
                  },
                  {
                    academicLevelId: 2,
                    academicLevelName: "G3b - SHKI BSc.",
                  },
                ],
              },
            ],
            semester: {
              semesterID: 1,
              semesterName: "Semestri i trete",
            },
            specializations: {
              specializationId: 1,
              specializationName: "WEB",
            },
            courseCategory: {
              categoryId: 1,
              categoryName: "Obligative",
            },
          },
        },
      ],
    },
  ],
  specializations: [
    {
      specializationId: 3,
      specializationName: "Përgjithshëm",
    },
    {
      specializationId: 4,
      specializationName: "Software Systems Engineering",
    },
  ],
};

// --------------------------------------------------------------------------------------
export const fakeClass: Class = {
  classId: 14,
  startingTime: "17:40",
  endingTime: "19:10",
  lectureHall: {
    lectureHallId: "17",
    lectureHallName: "A007",
    capacity: "120",
    locationi: "Kati i pare",
  },
  course: {
    courseId: "B14",
    courseCode: "433",
    courseName: "LAB 2",
    ects: "7",
    academicStaff: [
      {
        userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
        firstName: "Endrit",
        lastName: "Makolli",
        parentName: "Sami Makolli",
        role: "STUDENT",
        city: "Prishtine",
        address: "Azem Jashanica 3",
        birthday: "13 korrik, 2001",
        country: "Kosovë",
        zipCode: "10000",
        age: "20",
        personalNumber: "--------",
        telephone: "+383 44 991 014",
        email: "em47593@ubt-uni.net",
        gender: "Mashkull",
        profilePictureUrl:
          "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
        academicStaffId: "192047593",
        academicLevels: [
          {
            academicLevelId: 1,
            academicLevelName: "G3a - SHKI BSc.",
          },
          {
            academicLevelId: 2,
            academicLevelName: "G3b - SHKI BSc.",
          },
        ],
      },
      {
        userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
        firstName: "Endrit2",
        lastName: "Makolli",
        parentName: "Sami Makolli",
        role: "STUDENT",
        city: "Prishtine",
        address: "Azem Jashanica 3",
        birthday: "13 korrik, 2001",
        country: "Kosovë",
        zipCode: "10000",
        age: "20",
        personalNumber: "--------",
        telephone: "+383 44 991 014",
        email: "em47593@ubt-uni.net",
        gender: "Mashkull",
        profilePictureUrl:
          "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
        academicStaffId: "192047593",
        academicLevels: [
          {
            academicLevelId: 1,
            academicLevelName: "G3a - SHKI BSc.",
          },
          {
            academicLevelId: 2,
            academicLevelName: "G3b - SHKI BSc.",
          },
        ],
      },
    ],
    semester: {
      semesterID: 1,
      semesterName: "Semestri i trete",
    },
    specializations: {
      specializationId: 1,
      specializationName: "WEB",
    },
    courseCategory: {
      categoryId: 1,
      categoryName: "Obligative",
    },
  },
};
export const fakeLectureHall: LectureHall = {
  lectureHallId: "17",
  lectureHallName: "A007",
  capacity: "120",
  locationi: "Kati i pare",
};

// -----------------
export const fakeCourse: Course = {
  courseId: "B14",
  courseCode: "433",
  courseName: "LAB 2",
  ects: "7",
  academicStaff: [
    {
      userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
      firstName: "Endrit",
      lastName: "Makolli",
      parentName: "Sami Makolli",
      role: "STUDENT",
      city: "Prishtine",
      address: "Azem Jashanica 3",
      birthday: "13 korrik, 2001",
      country: "Kosovë",
      zipCode: "10000",
      age: "20",
      personalNumber: "--------",
      telephone: "+383 44 991 014",
      email: "em47593@ubt-uni.net",
      gender: "Mashkull",
      profilePictureUrl:
        "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
      academicStaffId: "192047593",
      academicLevels: [
        {
          academicLevelId: 1,
          academicLevelName: "G3a - SHKI BSc.",
        },
        {
          academicLevelId: 2,
          academicLevelName: "G3b - SHKI BSc.",
        },
      ],
    },
    {
      userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
      firstName: "Endrit2",
      lastName: "Makolli",
      parentName: "Sami Makolli",
      role: "STUDENT",
      city: "Prishtine",
      address: "Azem Jashanica 3",
      birthday: "13 korrik, 2001",
      country: "Kosovë",
      zipCode: "10000",
      age: "20",
      personalNumber: "--------",
      telephone: "+383 44 991 014",
      email: "em47593@ubt-uni.net",
      gender: "Mashkull",
      profilePictureUrl:
        "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
      academicStaffId: "192047593",
      academicLevels: [
        {
          academicLevelId: 1,
          academicLevelName: "G3a - SHKI BSc.",
        },
        {
          academicLevelId: 2,
          academicLevelName: "G3b - SHKI BSc.",
        },
      ],
    },
  ],
  semester: {
    semesterID: 1,
    semesterName: "Semestri i trete",
  },
  specializations: {
    specializationId: 1,
    specializationName: "WEB",
  },
  courseCategory: {
    categoryId: 1,
    categoryName: "Obligative",
  },
};

export const fakeGroup: Group = {
  groupId: "1",
  groupName: "G3a - SHKI BSc.",
  timeSlot: "Pasdite",
  classes: [
    {
      classId: 14,
      startingTime: "19:20",
      endingTime: "20:50",
      lectureHall: {
        lectureHallId: "17",
        lectureHallName: "A002",
        capacity: "120",
        locationi: "Kati i pare",
      },
      course: {
        courseId: "B14",
        courseCode: "433",
        courseName: "Arkitektura Softuerike",
        ects: "5",
        academicStaff: [
          {
            userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
            firstName: "Endrit",
            lastName: "Makolli",
            parentName: "Sami Makolli",
            role: "STUDENT",
            city: "Prishtine",
            address: "Azem Jashanica 3",
            birthday: "13 korrik, 2001",
            country: "Kosovë",
            zipCode: "10000",
            age: "20",
            personalNumber: "--------",
            telephone: "+383 44 991 014",
            email: "em47593@ubt-uni.net",
            gender: "Mashkull",
            profilePictureUrl:
              "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
            academicStaffId: "192047593",
            academicLevels: [
              {
                academicLevelId: 1,
                academicLevelName: "G3a - SHKI BSc.",
              },
              {
                academicLevelId: 2,
                academicLevelName: "G3b - SHKI BSc.",
              },
            ],
          },
          {
            userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
            firstName: "Endrit2",
            lastName: "Makolli",
            parentName: "Sami Makolli",
            role: "STUDENT",
            city: "Prishtine",
            address: "Azem Jashanica 3",
            birthday: "13 korrik, 2001",
            country: "Kosovë",
            zipCode: "10000",
            age: "20",
            personalNumber: "--------",
            telephone: "+383 44 991 014",
            email: "em47593@ubt-uni.net",
            gender: "Mashkull",
            profilePictureUrl:
              "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
            academicStaffId: "192047593",
            academicLevels: [
              {
                academicLevelId: 1,
                academicLevelName: "G3a - SHKI BSc.",
              },
              {
                academicLevelId: 2,
                academicLevelName: "G3b - SHKI BSc.",
              },
            ],
          },
        ],
        semester: {
          semesterID: 1,
          semesterName: "Semestri i trete",
        },
        specializations: {
          specializationId: 1,
          specializationName: "WEB",
        },
        courseCategory: {
          categoryId: 1,
          categoryName: "Obligative",
        },
      },
    },
    {
      classId: 14,
      startingTime: "17:40",
      endingTime: "19:10",
      lectureHall: {
        lectureHallId: "17",
        lectureHallName: "A007",
        capacity: "120",
        locationi: "Kati i pare",
      },
      course: {
        courseId: "B14",
        courseCode: "433",
        courseName: "LAB 2",
        ects: "7",
        academicStaff: [
          {
            userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
            firstName: "Endrit",
            lastName: "Makolli",
            parentName: "Sami Makolli",
            role: "STUDENT",
            city: "Prishtine",
            address: "Azem Jashanica 3",
            birthday: "13 korrik, 2001",
            country: "Kosovë",
            zipCode: "10000",
            age: "20",
            personalNumber: "--------",
            telephone: "+383 44 991 014",
            email: "em47593@ubt-uni.net",
            gender: "Mashkull",
            profilePictureUrl:
              "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
            academicStaffId: "192047593",
            academicLevels: [
              {
                academicLevelId: 1,
                academicLevelName: "G3a - SHKI BSc.",
              },
              {
                academicLevelId: 2,
                academicLevelName: "G3b - SHKI BSc.",
              },
            ],
          },
          {
            userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
            firstName: "Endrit2",
            lastName: "Makolli",
            parentName: "Sami Makolli",
            role: "STUDENT",
            city: "Prishtine",
            address: "Azem Jashanica 3",
            birthday: "13 korrik, 2001",
            country: "Kosovë",
            zipCode: "10000",
            age: "20",
            personalNumber: "--------",
            telephone: "+383 44 991 014",
            email: "em47593@ubt-uni.net",
            gender: "Mashkull",
            profilePictureUrl:
              "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
            academicStaffId: "192047593",
            academicLevels: [
              {
                academicLevelId: 1,
                academicLevelName: "G3a - SHKI BSc.",
              },
              {
                academicLevelId: 2,
                academicLevelName: "G3b - SHKI BSc.",
              },
            ],
          },
        ],
        semester: {
          semesterID: 1,
          semesterName: "Semestri i trete",
        },
        specializations: {
          specializationId: 1,
          specializationName: "WEB",
        },
        courseCategory: {
          categoryId: 1,
          categoryName: "Obligative",
        },
      },
    },
  ],
};

export const fakeAdministriveStaff: AdministriveStaff = {
  userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
  firstName: "Doruntina",
  lastName: "Korca",
  parentName: "x",
  role: "STUDENT",
  city: "x",
  address: "x",
  birthday: "x",
  country: "Kosovë",
  zipCode: "30000",
  age: "23",
  personalNumber: "x",
  telephone: "+383 44 444 444",
  email: "db1234@ubt-uni.net",
  gender: "Femer",
  profilePictureUrl:
    "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
  administriveStaffId: "192047139",
};

// --------------------------------

export const fakeAcademicStaff: AcademicStaff = {
  userId: "b031f706-5ee5-4322-8003-37fe136bf4cf",
  firstName: "Endrit",
  lastName: "Makolli",
  parentName: "Sami Makolli",
  role: "STUDENT",
  city: "Prishtine",
  address: "Azem Jashanica 3",
  birthday: "13 korrik, 2001",
  country: "Kosovë",
  zipCode: "10000",
  age: "20",
  personalNumber: "--------",
  telephone: "+383 44 991 014",
  email: "em47593@ubt-uni.net",
  gender: "Mashkull",
  profilePictureUrl:
    "https://www.outbackballooning.com.au/wp-content/uploads/2019/01/2.jpg",
  academicStaffId: "192047593",
  academicLevels: [
    {
      academicLevelId: 1,
      academicLevelName: "G3a - SHKI BSc.",
    },
    {
      academicLevelId: 2,
      academicLevelName: "G3b - SHKI BSc.",
    },
  ],
};
// --------------------------------
