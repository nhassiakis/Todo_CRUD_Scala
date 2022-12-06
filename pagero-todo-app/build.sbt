name := """Pagero-Todo-App"""
organization := "com.nhassiakis"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.8"
// https://mvnrepository.com/artifact/mysql/mysql-connector-java
//libraryDependencies += guice
libraryDependencies ++= Seq(evolutions, guice)
//libraryDependencies += "mysql" % "mysql-connector-java" % "8.0.30"
libraryDependencies += "org.hsqldb" % "hsqldb" % "2.5.2"
libraryDependencies += "com.typesafe.play" %% "play-slick" % "4.0.2"
libraryDependencies += "com.typesafe.play" %% "play-slick-evolutions" % "4.0.2"
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.3" % Test

