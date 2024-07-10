// ignore_for_file: unused_element

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:just_audio/just_audio.dart';
import '../../models/rhyme_model.dart';
import '../../utils/const_dimensions.dart';
import '../../utils/constants.dart';

class RhymePage extends StatelessWidget {
  final FlutterTts flutterTts = FlutterTts();
  final AudioPlayer audioPlayer = AudioPlayer();
  final List<Rhyme> rhymes = [
    Rhyme(
      name: 'twinkle',
      lyrics: 'Twinkle, twinkle, little star,\nHow I wonder what you are\nUp above the world so high\nLike a diamond in the sky',
      soundAsset: 'assets/sounds/rhymes/twinkle.mp3',
      backgroundImage: 'assets/images/rhymes/twinkle.jpg',
    ),
    Rhyme(
      name: 'Jingle Bells',
      lyrics: 'Jingle bells, jingle bells,\nJingle all the way!\nOh! what fun it is to ride\nIn a one-horse open sleigh.',
      soundAsset: 'assets/sounds/rhymes/baba.mp3',
      backgroundImage: 'assets/images/rhymes/jingle.jpeg',
    ),
    // Add more rhymes here
  ];
 RhymePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          AppConstants.rhymes,
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: RhymeWidget(
        rhymes: rhymes,
        flutterTts: flutterTts,
        audioPlayer: audioPlayer,
      ),
    );
  }
}

class RhymeWidget extends StatefulWidget {
  final List<Rhyme> rhymes;
  final FlutterTts flutterTts;
  final AudioPlayer audioPlayer;

  RhymeWidget({
    Key? key,
    required this.rhymes,
    required this.flutterTts,
    required this.audioPlayer,
  }) : super(key: key);

  @override
  _RhymeWidgetState createState() => _RhymeWidgetState();
}

class _RhymeWidgetState extends State<RhymeWidget> {
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    Rhyme currentRhyme = widget.rhymes[currentIndex];
    return Stack(
      children: [
        Positioned.fill(
          child: Container(
            padding: const EdgeInsets.all(20.0), // Adjust the padding value as needed
            child: Image.asset(
              currentRhyme.backgroundImage,
              fit: BoxFit.cover,
            ),
          ),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const SizedBox(height: ConstantDimensions.heightMedium),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(
                currentRhyme.lyrics,
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 243, 241, 246),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: ConstantDimensions.heightMedium),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  onPressed: _navigateToPreviousRhyme,
                  icon: Icon(Icons.arrow_back),
                  iconSize: 36,
                  color: const Color.fromARGB(255, 235, 183, 200),
                ),
                const SizedBox(width: ConstantDimensions.widthMedium),
                ElevatedButton(
                  onPressed: () async {
                    await _playRhymeSound(currentRhyme.soundAsset);
                  },
                  child: const Text('Play Sound'),
                ),
                 IconButton(
                  onPressed: _navigateToNextRhyme,
                  icon: Icon(Icons.arrow_forward),
                  iconSize: 36,
                  color: const Color.fromARGB(255, 235, 183, 200),
                ),
              ],
            ),
            const SizedBox(height: ConstantDimensions.heightMedium),
            ElevatedButton(
              onPressed: () async {
                await _stopRhymeSound();
              },
              child: const Text('Stop Sound'),
            ),
            const SizedBox(height: ConstantDimensions.heightMedium),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(width: ConstantDimensions.widthMedium),
               
              ],
            ),
          ],
        ),
      ],
    );
  }

  Future<void> _playRhymeSound(String soundAsset) async {
    try {
      await widget.audioPlayer.setAsset(soundAsset);
      await widget.audioPlayer.play();
      print('Playing sound: $soundAsset');
    } catch (e) {
      print('Error playing sound: $e');
    }
  }

  Future<void> _stopRhymeSound() async {
    try {
      await widget.audioPlayer.stop();
      print('Sound stopped');
    } catch (e) {
      print('Error stopping sound: $e');
    }
  }

  void _navigateToNextRhyme() {
    setState(() {
      currentIndex = (currentIndex + 1) % widget.rhymes.length;
    });
  }

  void _navigateToPreviousRhyme() {
    setState(() {
      currentIndex = (currentIndex - 1 + widget.rhymes.length) % widget.rhymes.length;
    });
  }
}