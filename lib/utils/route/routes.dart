
import 'package:flutter/material.dart';
import 'package:learn/pages/modules/rhymes.dart';

import '../../landing_page.dart';
import '../../pages/about.dart';
import '../../pages/explore/drawingboard.dart';
import '../../pages/explore/explore.dart';
import '../../pages/explore/quiz.dart';
import '../../pages/fruits.dart';
import '../../pages/home.dart';
import '../../pages/main_home.dart';
import '../../pages/modules/animals.dart';
import '../../pages/modules/atoz.dart';
import '../../pages/modules/birds.dart';
import '../../pages/modules/colours.dart';
import '../../pages/modules/favorite.dart';
import '../../pages/modules/flowers.dart';
import '../../pages/modules/occupation.dart';
import '../../pages/modules/parts.dart';
import '../../pages/modules/planets.dart';
import '../../pages/modules/seasons.dart';
import 'page_transtion.dart';
import 'route_constant.dart';


class Routers {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case AllRoutesConstant.homeRoute:
        return slidePageRoute(const MyHomePage());
      case AllRoutesConstant.exploreRoute:
        return slidePageRoute(const ExplorePage());
      case AllRoutesConstant.atozRoute:
        return slidePageRoute(const AtoZ());
      case AllRoutesConstant.birdsRoute:
        return slidePageRoute(BirdsPage());
      case AllRoutesConstant.partsRoute:
        return slidePageRoute(const PartsPage());
      case AllRoutesConstant.solarRoute:
        return slidePageRoute(PlanetsPage());
      case AllRoutesConstant.animalRoute:
        return slidePageRoute(AnimalsPage());
      case AllRoutesConstant.colourRoute:
        return slidePageRoute(const ColoursPage());
      case AllRoutesConstant.aboutRoute:
        return slidePageRoute(const AboutPage());
      case AllRoutesConstant.flowerRoute:
        return slidePageRoute(const FlowerPage());
          case AllRoutesConstant.favoriteRoute:
        return slidePageRoute(const FavoritePage());
      case AllRoutesConstant.quizRoute:
        return slidePageRoute(const Quiz());
      case AllRoutesConstant.seasonRoute:
        return slidePageRoute(const SeasonsPage());
      case AllRoutesConstant.occupationRoute:
        return slidePageRoute(OccupationPage());
      case AllRoutesConstant.rhymesRoute:
        return slidePageRoute(RhymePage());
      case AllRoutesConstant.fruitRoute:
        return slidePageRoute(FruitsPage());
      case AllRoutesConstant.drawingboardRoute:
        return slidePageRoute(const DrawingBoardPage());
      case AllRoutesConstant.landingRoute:
        return slidePageRoute(const LandingPage());
      case AllRoutesConstant.mainhomeRoute:
        return slidePageRoute(MainHome());
      default:
        return MaterialPageRoute(
          builder: (context) => const Scaffold(
            body: Center(
              child: Text('No route found'),
            ),
          ),
        );
    }
  }
}
