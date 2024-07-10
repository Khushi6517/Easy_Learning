// models/rhyme_model.dart
import 'package:flutter/material.dart';

class Rhyme {
 final String name;
 final String lyrics;
 final String soundAsset; // This should be a path to the audio file
 final String backgroundImage;
  
  Rhyme({
    required this.name,
    required this.lyrics, 
    required this.soundAsset,
    required this.backgroundImage,
    });
}
