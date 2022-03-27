const {Sequelize,DataTypes,Model,Op} = require('sequelize');

const sequelize = new Sequelize('codehub','root','12345678',{
    host:'127.0.0.1',
    dialect:'mysql'
});


class Student extends Model {};

Student.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    age:DataTypes.INTEGER
},{
    tableName:'students',
    createdAt:false,
    updatedAt:false,
    sequelize
});



class Course extends Model {};

Course.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    price:DataTypes.DOUBLE
},{
    tableName:'courses',
    createdAt:false,
    updatedAt:false,
    sequelize
});





class StudentCourse extends Model {};

StudentCourse.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    studentId: {
        type:DataTypes.INTEGER,
        references:{
            model:Student,
            key:'id'
        },
        field:'student_id'
    },
    courseId: {
        type:DataTypes.INTEGER,
        references:{
            model:Course,
            key:'id'
        },
        field:'course_id'
    }
},{
    tableName:'students_select_courses',
    createdAt:false,
    updatedAt:false,
    sequelize
});


//多对多关系的联系
Student.belongsToMany(Course,{
    through:StudentCourse,
    foreignKey:'studentId',
    otherKey:'courseId'
});

Course.belongsToMany(Student,{
    through:StudentCourse,
    foreignKey:'courseId',
    otherKey:'studentId'
});


async function query() {
    const res = await Student.findAll({
        include:{
            model:Course
        }
    });
    console.log(res);
}

query();
