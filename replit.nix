{ pkgs }: {
  deps = [
    pkgs.python312Packages.pytest_7
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}