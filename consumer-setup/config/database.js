const {Sequelize}=require("sequelize");


// lma a3ml container mn el application hghyr el localhost l postgres 34n y7wlha l ipaddress bta3
//elcontainer 34n hyb2o fe nafs elbridge network
const primarydb=new Sequelize('main_database',"postgres","postgres",{
    host:"primary1",
    dialect: 'postgres',
    port:5432,
})
// lma a3ml container mn el application hghyr el localhost l postgres 34n y7wlha l ipaddress bta3
//elcontainer 34n hyb2o fe nafs elbridge network
const replicadb=new Sequelize('main_database',"postgres","postgres",{
    host:"replica1",
    dialect: 'postgres',
    port:5432,
})

module.exports={
    primarydb,
    replicadb
};