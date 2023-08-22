package database

import (
	"github.com/Andreworoh27/farebook/graph/model"
	"github.com/Andreworoh27/farebook/helper"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var database *gorm.DB

const defaultDatabase = "host=localhost user=postgres password=postgres dbname=farebook port=5432 sslmode=disable TimeZone=Asia/Shanghai"

func GetInstance() *gorm.DB {
	if database == nil {
		dsn := helper.GoDotEnvVariable("DATABASE_URL")

		if dsn == " " {
			dsn = defaultDatabase
		}

		db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err != nil {
			panic(err)
		}

		database = db
	}
	return database
}

func MigrateTable() {
	db := GetInstance()
	db.AutoMigrate(&model.User{})
	db.AutoMigrate(&model.Post{})
	db.AutoMigrate(&model.Comment{})
	db.AutoMigrate(&model.Friend{})
	db.AutoMigrate(&model.Like{})
}
